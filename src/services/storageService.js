/* LocalStorage service for data persistence */

const KEYS = {
  PROJECTS: 'mna_projects',
  MESSAGES: 'mna_messages',
  AUTH: 'mna_auth',
};

const readJson = (key, fallback) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
};

export const storageService = {
  // Projects
  getProjects: () => {
    return readJson(KEYS.PROJECTS, null);
  },

  saveProjects: (projects) => {
    localStorage.setItem(KEYS.PROJECTS, JSON.stringify(projects));
  },

  addProject: (project) => {
    const projects = storageService.getProjects() || [];
    const updated = [...projects, { ...project, id: crypto.randomUUID?.() || Date.now().toString() }];
    storageService.saveProjects(updated);
    return updated;
  },

  updateProject: (id, updatedProject) => {
    const projects = storageService.getProjects() || [];
    const index = projects.findIndex((p) => p.id === id);
    if (index !== -1) {
      const updated = projects.map((project) =>
        project.id === id ? { ...project, ...updatedProject, id } : project
      );
      storageService.saveProjects(updated);
      return updated;
    }
    return projects;
  },

  deleteProject: (id) => {
    const projects = storageService.getProjects() || [];
    const filtered = projects.filter((p) => p.id !== id);
    storageService.saveProjects(filtered);
    return filtered;
  },

  // Messages
  getMessages: () => {
    return readJson(KEYS.MESSAGES, []);
  },

  saveMessages: (messages) => {
    localStorage.setItem(KEYS.MESSAGES, JSON.stringify(messages));
  },

  addMessage: (message) => {
    const messages = storageService.getMessages();
    const updated = [...messages, {
      ...message,
      id: crypto.randomUUID?.() || Date.now().toString(),
      createdAt: new Date().toISOString(),
      read: false,
    }];
    storageService.saveMessages(updated);
    return updated;
  },

  deleteMessage: (id) => {
    const messages = storageService.getMessages();
    const filtered = messages.filter((m) => m.id !== id);
    storageService.saveMessages(filtered);
    return filtered;
  },

  markMessageRead: (id) => {
    const messages = storageService.getMessages();
    const index = messages.findIndex((m) => m.id === id);
    if (index !== -1) {
      const updated = messages.map((message) =>
        message.id === id ? { ...message, read: true } : message
      );
      storageService.saveMessages(updated);
      return updated;
    }
    return messages;
  },

  // Auth
  getAuth: () => {
    return readJson(KEYS.AUTH, null);
  },

  setAuth: (auth) => {
    localStorage.setItem(KEYS.AUTH, JSON.stringify(auth));
  },

  clearAuth: () => {
    localStorage.removeItem(KEYS.AUTH);
  },
};
