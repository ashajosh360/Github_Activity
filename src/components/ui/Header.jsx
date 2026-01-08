import React from 'react';
import Icon from '../AppIcon';

const Header = () => {
  return (
    <header className="bg-surface border-b border-border-medium px-6 py-4 fixed top-0 left-0 right-0 z-100">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
            <Icon name="BarChart3" size={24} color="#F8FAFC" strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-text-primary font-mono tracking-tight">
              DevOps Analytics
            </h1>
            <span className="text-xs text-text-secondary font-mono">
              Development Operations Dashboard
            </span>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center space-x-4">
          {/* Real-time Status Indicator */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full pulse-live"></div>
            <span className="text-sm text-text-secondary font-mono">Live</span>
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-text-secondary hover:text-text-primary transition-smooth rounded-lg hover:bg-surface-light">
            <Icon name="Bell" size={20} strokeWidth={2} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-mono">3</span>
            </span>
          </button>

          {/* Settings */}
          <button className="p-2 text-text-secondary hover:text-text-primary transition-smooth rounded-lg hover:bg-surface-light">
            <Icon name="Settings" size={20} strokeWidth={2} />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3 pl-4 border-l border-border-medium">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <Icon name="User" size={16} color="#F8FAFC" strokeWidth={2} />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-text-primary font-mono">Admin</p>
              <p className="text-xs text-text-secondary font-mono">Engineering Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;