/* oxlint-disable react/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { storageService } from '../services/storageService';
import { defaultProjects } from '../data/defaultData';

const DataContext = createContext(null);

const isDemoProjectData = (projects) =>
  projects?.some((project) => project.title === 'Skyline Tower Residences');

export function DataProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Initialize projects
    const stored = storageService.getProjects();
    if (stored && stored.length > 0 && !isDemoProjectData(stored)) {
      setProjects(stored);
    } else {
      storageService.saveProjects(defaultProjects);
      setProjects(defaultProjects);
    }

    // Initialize messages
    const msgs = storageService.getMessages();
    setMessages(msgs);
  }, []);

  const addProject = (project) => {
    const updated = storageService.addProject(project);
    setProjects(updated);
  };

  const updateProject = (id, project) => {
    const updated = storageService.updateProject(id, project);
    setProjects(updated);
  };

  const deleteProject = (id) => {
    const updated = storageService.deleteProject(id);
    setProjects(updated);
  };

  const addMessage = (message) => {
    const updated = storageService.addMessage(message);
    setMessages(updated);
  };

  const deleteMessage = (id) => {
    const updated = storageService.deleteMessage(id);
    setMessages(updated);
  };

  const markMessageRead = (id) => {
    const updated = storageService.markMessageRead(id);
    setMessages(updated);
  };

  return (
    <DataContext.Provider
      value={{
        projects,
        messages,
        addProject,
        updateProject,
        deleteProject,
        addMessage,
        deleteMessage,
        markMessageRead,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
