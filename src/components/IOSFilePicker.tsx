import React, { useState } from 'react';
import { X, ChevronRight, Folder, FileText, Image, Clock, Search } from 'lucide-react';

interface IOSFilePickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFile: (fileName: string) => void;
  documentType: string;
}

export function IOSFilePicker({ isOpen, onClose, onSelectFile, documentType }: IOSFilePickerProps) {
  const [currentView, setCurrentView] = useState<'main' | 'browse' | 'recents'>('main');
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  if (!isOpen) return null;

  // Mock file data
  const recentFiles = [
    { name: 'Fire_Report_2024.pdf', type: 'pdf', date: 'Yesterday' },
    { name: 'Death_Certificate.pdf', type: 'pdf', date: 'Yesterday' },
    { name: 'Global_News_Jasper_Fire.pdf', type: 'pdf', date: 'Yesterday' },
    { name: 'Insurance_Claim.pdf', type: 'pdf', date: '2 days ago' },
    { name: 'Receipt_Jan2024.jpg', type: 'image', date: '1 week ago' },
    { name: 'Medical_Certificate.pdf', type: 'pdf', date: '2 weeks ago' },
    { name: 'Bank_Statement_Dec.pdf', type: 'pdf', date: '3 weeks ago' }
  ];

  const browseLocations = [
    { name: 'iCloud Drive', icon: '☁️' },
    { name: 'On My iPhone', icon: '📱' },
    { name: 'Downloads', icon: '⬇️' },
    { name: 'Documents', icon: '📄' },
    { name: 'Photos', icon: '🖼️' }
  ];

  const handleSelectFile = (fileName: string) => {
    if (selectedFiles.includes(fileName)) {
      setSelectedFiles(selectedFiles.filter(f => f !== fileName));
    } else {
      setSelectedFiles([...selectedFiles, fileName]);
    }
  };

  const handleDone = () => {
    selectedFiles.forEach(file => onSelectFile(file));
    setSelectedFiles([]);
    onClose();
  };

  const renderMainView = () => (
    <>
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E5EA]">
        <button
          onClick={onClose}
          className="text-[17px] text-[#007AFF] active:opacity-70"
        >
          Cancel
        </button>
        <h2 className="text-[17px] font-semibold text-black">Select Document</h2>
        <button
          onClick={handleDone}
          className="text-[17px] font-semibold text-[#007AFF] active:opacity-70"
          disabled={selectedFiles.length === 0}
          style={{ opacity: selectedFiles.length === 0 ? 0.4 : 1 }}
        >
          Done
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-[#f2f2f7]">
        <div className="p-4">
          <p className="text-[13px] text-[#8E8E93] mb-3">
            Select {documentType}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="bg-white mb-[35px]">
          <button
            onClick={() => setCurrentView('recents')}
            className="w-full flex items-center justify-between px-4 py-3 border-b border-[#E5E5EA] active:bg-[#D1D1D6]"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#007AFF]" />
              <span className="text-[17px] text-black">Recents</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#C6C6C8]" />
          </button>
          
          <button
            onClick={() => setCurrentView('browse')}
            className="w-full flex items-center justify-between px-4 py-3 active:bg-[#D1D1D6]"
          >
            <div className="flex items-center gap-3">
              <Folder className="w-5 h-5 text-[#007AFF]" />
              <span className="text-[17px] text-black">Browse</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#C6C6C8]" />
          </button>
        </div>
      </div>
    </>
  );

  const renderRecentsView = () => (
    <>
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E5EA]">
        <button
          onClick={() => setCurrentView('main')}
          className="text-[17px] text-[#007AFF] active:opacity-70"
        >
          ← Back
        </button>
        <h2 className="text-[17px] font-semibold text-black">Recents</h2>
        <button
          onClick={handleDone}
          className="text-[17px] font-semibold text-[#007AFF] active:opacity-70"
          disabled={selectedFiles.length === 0}
          style={{ opacity: selectedFiles.length === 0 ? 0.4 : 1 }}
        >
          Done
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-[#f2f2f7]">
        <div className="bg-white">
          {recentFiles.map((file, index) => (
            <div
              key={file.name}
              className={`border-b border-[#E5E5EA] ${index === recentFiles.length - 1 ? 'border-b-0' : ''}`}
            >
              <button
                onClick={() => handleSelectFile(file.name)}
                className="w-full flex items-center gap-3 px-4 py-3 active:bg-[#D1D1D6]"
              >
                <div className="flex-shrink-0">
                  {file.type === 'pdf' ? (
                    <FileText className="w-10 h-10 text-[#FF3B30]" />
                  ) : (
                    <Image className="w-10 h-10 text-[#007AFF]" />
                  )}
                </div>
                <div className="flex-1 text-left">
                  <div className="text-[17px] text-black">{file.name}</div>
                  <div className="text-[13px] text-[#8E8E93]">{file.date}</div>
                </div>
                {selectedFiles.includes(file.name) && (
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#007AFF] flex items-center justify-center">
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                      <path d="M1 5.5L5 9.5L13 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderBrowseView = () => (
    <>
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E5EA]">
        <button
          onClick={() => setCurrentView('main')}
          className="text-[17px] text-[#007AFF] active:opacity-70"
        >
          ← Back
        </button>
        <h2 className="text-[17px] font-semibold text-black">Browse</h2>
        <button
          onClick={handleDone}
          className="text-[17px] font-semibold text-[#007AFF] active:opacity-70"
          disabled={selectedFiles.length === 0}
          style={{ opacity: selectedFiles.length === 0 ? 0.4 : 1 }}
        >
          Done
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-[#f2f2f7]">
        <div className="bg-white">
          {browseLocations.map((location, index) => (
            <button
              key={location.name}
              className={`w-full flex items-center justify-between px-4 py-3 active:bg-[#D1D1D6] ${
                index !== browseLocations.length - 1 ? 'border-b border-[#E5E5EA]' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{location.icon}</span>
                <span className="text-[17px] text-black">{location.name}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#C6C6C8]" />
            </button>
          ))}
        </div>

        <div className="p-4">
          <p className="text-[13px] text-[#8E8E93] text-center">
            Select a location to browse files
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#f2f2f7]">
      {currentView === 'main' && renderMainView()}
      {currentView === 'recents' && renderRecentsView()}
      {currentView === 'browse' && renderBrowseView()}
    </div>
  );
}