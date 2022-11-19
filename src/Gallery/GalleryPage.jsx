import React from 'react';
import DashboardMenuBar from '../MainApplication/DashboardMenuBar';
import GalleryHeader from './Components/GalleryHeader';
import classes from './GalleryPage.module.css';

const GalleryPage = () => {
   return (
      <div>
         <DashboardMenuBar />
         <GalleryHeader />
      </div>
   );
}

export default GalleryPage;
