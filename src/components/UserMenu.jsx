import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  if (!user) {
    return (
      <Link
        to='/signin'
        className='inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-bold text-white transition-all hover:bg-[#e65c00] shadow-sm'
      >
        Sign In
      </Link>
    );
  }

  return (
    <div className='flex items-center gap-2'>
      <button className='inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ece8e4] bg-white text-slate-500 transition-colors hover:text-slate-900'>
        <svg className='h-4 w-4' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5' /><path d='M9 17a3 3 0 0 0 6 0' /></svg>
      </button>
      <div className='group relative'>
        <button className='inline-flex items-center gap-1.5 rounded-full border border-[#ece8e4] bg-white px-3 py-1.5 text-xs font-bold text-slate-700 transition-colors hover:text-slate-900' type='button'>
          <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='User' className='h-5 w-5 rounded-full object-cover' />
          <span>Profile</span>
        </button>
        <div className='absolute right-0 top-full mt-2 hidden w-48 flex-col rounded-2xl border border-[#ece8e4] bg-white p-2 shadow-xl group-hover:flex group-focus-within:flex z-50'>
          <div className='px-3 py-2 text-xs font-bold text-slate-400 border-b border-[#ece8e4] mb-2 truncate'>
            {user.email}
          </div>
          <button onClick={handleLogout} className='w-full rounded-xl px-3 py-2 text-left text-sm font-bold text-red-600 transition-colors hover:bg-red-50'>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

