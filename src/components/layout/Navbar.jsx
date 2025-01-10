// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaUserCircle, FaBell, FaSearch } from 'react-icons/fa';
import Header from '../common/Header';
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState([
    {id: 1, text: "New health report available", unread: true},
    {id: 2, text: "Appointment reminder: Check-up tomorrow", unread: true}
  ]);
  const [profileMenuItems] = useState([
    {id: 1, text: "Profile Settings", action: () => console.log("Navigate to profile settings")},
    {id: 2, text: "Account Settings", action: () => console.log("Navigate to account settings")},
    {id: 3, text: "Logout", action: () => console.log("Logout user")}
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Simulated search functionality
    if (e.target.value.length >= 3) {
      console.log(`Searching database for: ${e.target.value}`);
      // Here you would typically make an API call to search
    }
  };

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    // Mark notifications as read when opened
    if (!showNotifications) {
      const updatedNotifications = notifications.map(notif => ({
        ...notif,
        unread: false
      }));
      setNotifications(updatedNotifications);
    }
  };

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Performing search for:', searchQuery);
      // Simulated search execution
      if (searchQuery.length >= 3) {
        console.log('Making API call to search endpoint');
        // Here you would make an API call with the search query
      }
    }
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest('.notification-btn') && !e.target.closest('.notifications-panel')) {
      setShowNotifications(false);
    }
    if (!e.target.closest('.profile-button') && !e.target.closest('.profile-menu')) {
      setShowProfileMenu(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar navbar-main navbar-fixed">
      <div className="navbar-left navbar-section">
        <button 
          className="sidebar-toggle btn btn-icon" 
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <FaBars className="nav-icon" />
        </button>
        <Header title="Health Tracker" className="navbar-header" />
        
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input 
            type="search"
            placeholder="Search..."
            className="search-input"
            value={searchQuery}
            onChange={handleSearch}
            onKeyPress={handleKeyPress}
            aria-label="Search"
          />
        </div>
      </div>

      <div className="navbar-actions navbar-section">
        <div className="notification-wrapper">
          <button 
            className="notification-btn btn btn-icon" 
            aria-label="Notifications"
            onClick={handleNotificationClick}
          >
            <FaBell className="nav-icon" />
            {notifications.some(n => n.unread) && (
              <span className="notification-badge">
                {notifications.filter(n => n.unread).length}
              </span>
            )}
          </button>
          
          {showNotifications && (
            <div className="notifications-panel">
              {notifications.map(notification => (
                <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
                  {notification.text}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="profile-wrapper">
          <button 
            className="profile-button btn btn-icon"
            onClick={handleProfileClick}
            aria-label="Profile menu"
          >
            <FaUserCircle className="nav-icon" />
            <span className="profile-name">John Doe</span>
          </button>

          {showProfileMenu && (
            <div className="profile-menu">
              {profileMenuItems.map(item => (
                <button
                  key={item.id}
                  className="profile-menu-item"
                  onClick={item.action}
                >
                  {item.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
