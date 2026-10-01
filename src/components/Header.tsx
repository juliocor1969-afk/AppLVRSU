import React from 'react';
import { ArrowLeft, PhoneCall, Smartphone, Monitor } from 'lucide-react';
import { ScreenId } from '../types';

interface HeaderProps {
  currentScreen: ScreenId;
  screenTitle: string;
  onNavigateBack: () => void;
  isDeviceMode: boolean;
  onToggleDeviceMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  screenTitle,
  onNavigateBack,
  isDeviceMode,
  onToggleDeviceMode,
}) => {
  const isHome = currentScreen === 'home';

  return (
    <header className="bg-[#D3122A] text-white shadow-md relative z-40 select-none">
      <div className="flex items-center justify-between px-4 h-14">
        {/* Left Slot */}
        <div className="flex items-center gap-2">
          {!isHome ? (
            <button
              onClick={onNavigateBack}
              aria-label="Volver atrás"
              className="p-2 -ml-2 rounded-full hover:bg-black/15 active:bg-black/25 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/90 animate-pulse" />
              <span className="text-xs uppercase tracking-wider font-semibold text-white/90">UGT Vitoria</span>
            </div>
          )}
        </div>

        {/* Center Title */}
        <div className="flex-1 px-2 text-center truncate">
          <h1 className="text-base font-bold tracking-tight text-white truncate">
            {isHome ? 'Limpieza Viaria y RSU' : screenTitle}
          </h1>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1">
          {/* Quick Call */}
          <a
            href="tel:648928661"
            title="Llamar"
            className="p-2 rounded-full hover:bg-black/15 active:bg-black/25 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <PhoneCall className="w-4 h-4 text-white" />
          </a>

          {/* Toggle Device Frame / Fullscreen (visible on wider screens) */}
          <button
            onClick={onToggleDeviceMode}
            title={isDeviceMode ? 'Ver en pantalla completa' : 'Ver marco móvil Android'}
            className="hidden md:flex p-2 rounded-full hover:bg-black/15 active:bg-black/25 transition-colors touch-manipulation min-w-[44px] min-h-[44px] items-center justify-center"
          >
            {isDeviceMode ? (
              <Monitor className="w-4 h-4 text-white" />
            ) : (
              <Smartphone className="w-4 h-4 text-white" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
