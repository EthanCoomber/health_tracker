// src/pages/Settings.jsx
import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    units: 'imperial', // imperial or metric
    language: 'english',
    email: 'user@example.com',
    name: 'John Doe'
  });

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>

      <section className="settings-section">
        <h2>Account Settings</h2>
        <div className="settings-group">
          <div className="setting-item">
            <label>Name</label>
            <input 
              type="text"
              value={settings.name}
              onChange={(e) => handleSettingChange('name', e.target.value)}
            />
          </div>
          <div className="setting-item">
            <label>Email</label>
            <input 
              type="email"
              value={settings.email}
              onChange={(e) => handleSettingChange('email', e.target.value)}
            />
          </div>
          <button className="btn">Change Password</button>
        </div>
      </section>

      <section className="settings-section">
        <h2>Preferences</h2>
        <div className="settings-group">
          <div className="setting-item">
            <label>Units</label>
            <select 
              value={settings.units}
              onChange={(e) => handleSettingChange('units', e.target.value)}
            >
              <option value="imperial">Imperial (lbs, inches)</option>
              <option value="metric">Metric (kg, cm)</option>
            </select>
          </div>
          <div className="setting-item">
            <label>Language</label>
            <select
              value={settings.language}
              onChange={(e) => handleSettingChange('language', e.target.value)}
            >
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          </div>
        </div>
      </section>

      <section className="settings-section app-settings">
        <h2 className="settings-heading">App Settings</h2>
        <div className="settings-group app-settings-group">
          <div className="setting-item notification-setting">
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={settings.notifications}
                onChange={(e) => handleSettingChange('notifications', e.target.checked)}
              />
              Enable Notifications
            </label>
          </div>
          {/* <div className="setting-item dark-mode-setting">
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={settings.darkMode}
                onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
              />
              Dark Mode
            </label>
          </div> */}
        </div>
      </section>

      <section className="settings-section">
        <h2>Data Management</h2>
        <div className="settings-group">
          <button className="btn export">Export Data</button>
          <button className="btn danger">Delete Account</button>
        </div>
      </section>
    </div>
  );
};

export default Settings;
