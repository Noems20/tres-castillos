import React from 'react';
import { motion } from 'framer-motion';

import './logo.styles.scss';

const pathVariants = {
  hidden: {
    // opacity: 0,
    pathLength: 1,
  },
  visible: {
    // opacity: 1,
    pathLength: [1, 0, 1],
    transition: {
      duration: 12,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

const Logo = () => {
  return (
    <>
      <motion.svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        width='100%'
        // height='399.74px'
        viewBox='0 0 423.6 399.74'
        xmlSpace='preserve'
        initial='hidden'
        animate='visible'
      >
        <defs></defs>
        <g>
          <motion.path
            variants={pathVariants}
            className='st0'
            d='M140.54,65.3c9.26-0.29,18.51-0.64,27.77-1.03c10.1-0.43,20.19-0.94,30.28-1.39
		c6.05-0.27,12.1-0.47,18.14-0.71c13.2-0.52,26.4-1.05,39.6-1.57c6.63-0.26,13.26-0.46,19.88-0.73c9.57-0.39,19.14-0.82,28.71-1.22
		c9.89-0.41,19.77-0.82,29.66-1.22c14.04-0.56,28.08-1.11,42.13-1.64c2.8-0.11,2.91-0.06,3.06,2.68c0.32,6.25,0.54,12.51,0.79,18.77
		c0.53,13.36,1.06,26.71,1.58,40.07c0.36,9.31,0.65,18.62,1.05,27.93c0.54,12.62,1.16,25.23,1.71,37.85
		c0.29,6.68,0.47,13.36,0.73,20.04c0.43,11.04,0.87,22.09,1.31,33.13c0.02,0,0.05,0,0.07,0c0,1.05-0.08,2.11,0.02,3.16
		c0.12,1.21-0.3,1.73-1.54,1.78c-7.2,0.28-14.41,0.62-21.61,0.91c-16.46,0.66-32.92,1.31-49.38,1.95
		c-10.52,0.41-21.04,0.8-31.55,1.24c-11.57,0.48-23.13,1.02-34.7,1.5c-9.36,0.38-18.72,0.68-28.08,1.07
		c-10.36,0.43-20.72,0.95-31.07,1.4c-5.99,0.26-11.99,0.46-17.99,0.69c-13.41,0.52-26.82,1.06-40.23,1.57
		c-9.31,0.36-18.62,0.69-27.93,1.05c-5.84,0.23-11.67,0.49-17.51,0.76c-1.75,0.08-2.15-0.19-2.22-1.99
		c-0.37-8.78-0.71-17.56-1.07-26.35c-0.62-15.2-1.25-30.39-1.85-45.59c-0.37-9.41-0.66-18.83-1.05-28.24
		c-0.56-13.51-1.17-27.02-1.75-40.54c-0.15-3.42-0.15-6.85-0.43-10.26c-0.48-6.03-0.14-12.1-0.75-18.1
		c-0.43-4.14,0.12-8.28-0.45-12.39c-0.2-1.48,0.47-2.04,1.98-2.09L140.54,65.3z M129.66,188c0.18-1.79,0-4.34,0.75-6.8
		c0.83-2.7,2.66-3.27,4.92-1.52c1.08,0.84,2.08,1.77,3,2.79c3.74,4.14,7.51,8.25,11.27,12.37c6.21,6.81,12.38,13.63,18.63,20.41
		c2.78,3.02,5.45,6.14,8.46,8.95c2.94,2.74,6.55,2.04,8.25-1.61c0.37-0.81,0.65-1.67,0.87-2.53c0.68-2.77,0.88-5.61,0.94-8.46
		c0.22-11.91-0.85-23.77-1.08-35.66c-0.06-3.1-0.31-6.2-0.41-9.3c-0.24-7.41-0.82-14.83-0.06-22.24c0.3-2.91,0.74-5.73,3.72-7.4
		c3.59-2.02,4.31-5.42,3.72-9.15c-0.57-3.64-2.94-5.85-6.47-6.47c-6.65-1.18-13.32-0.96-19.91,0.55c-2.18,0.5-4.11,1.61-5.26,3.73
		c-2.21,4.09-1.18,8.85,2.69,11.38c2.61,1.7,4.12,3.97,4.65,6.99c0.76,4.32,0.96,8.68,1.08,13.05c0.04,1.35-0.22,2.74-0.54,4.06
		c-0.46,1.89-1.92,2.46-3.65,1.56c-0.9-0.46-1.66-1.11-2.35-1.84c-10.42-11.15-20.85-22.3-31.25-33.47
		c-2.72-2.92-5.8-4.72-9.99-4.43c-2.78,0.19-5.58,0.13-8.35,0.42c-2.57,0.27-5.12,0.67-7.5,1.78c-3.18,1.47-5.34,3.72-5.62,7.39
		c-0.27,3.63,1.46,6.17,4.52,7.85c2.74,1.5,4.3,3.79,4.97,6.77c0.33,1.49,0.73,2.97,0.99,4.47c1.09,6.13,1.44,12.33,1.8,18.53
		c0.65,11.15,0.75,22.31,0.45,33.47c-0.09,3.25-1.03,6.19-3.83,8.3c-1.57,1.18-2.77,2.69-3.02,4.81c-0.47,4.11,1.12,7.33,4.72,9.37
		c4.15,2.35,8.67,2.41,13.22,2.1c4.07-0.28,8.06-0.99,11.5-3.46c4.7-3.38,4.93-10.3,0.2-13.6c-3.11-2.16-4.49-5.01-4.94-8.56
		C130.17,197.97,129.88,193.35,129.66,188z M281.9,172.95c0.21-3.24-0.29-7.05-1-10.83c-2.56-13.67-7.81-25.99-18.38-35.49
		c-9.33-8.39-20.29-10.89-32.34-7.89c-13.19,3.29-22.05,11.92-27.51,24.08c-5.71,12.72-6.81,26.03-4.28,39.71
		c1.9,10.29,5.74,19.67,12.55,27.72c5.03,5.94,11.27,10.14,18.73,12.32c17.48,5.1,34.68-4.19,43.38-17.98
		C279.04,195.12,281.81,184.74,281.9,172.95z M343.15,167.05c-0.2-6.18-0.63-12.9-2.67-19.4c-0.5-1.58-1.26-3.01-2.47-4.17
		c-1.62-1.54-3.58-1.53-5.21-0.02c-1.22,1.13-1.88,2.54-2.07,4.15c-0.25,2.14-0.41,4.29-0.63,6.44c-0.36,3.5-1.58,4.61-5.07,4.64
		c-0.58,0.01-1.16,0-1.74-0.04c-3.08-0.23-3.9-1.12-4.22-4.19c-0.46-4.41-0.25-8.84-0.57-13.25c-0.13-1.83-0.11-3.67,0.2-5.51
		c0.4-2.43,1.75-3.86,4.13-4.38c3.48-0.76,7-0.57,10.53-0.49c6.11,0.14,10.17,3.15,12.79,8.48c0.39,0.8,0.89,1.56,1.42,2.27
		c2.13,2.89,6.03,2.73,7.89-0.35c1-1.65,1.51-3.47,1.58-5.4c0.1-2.53,0.06-5.06-0.35-7.56c-0.82-4.92-1.99-9.71-5.32-13.65
		c-1.94-2.3-3.64-2.71-6.43-1.52c-2.53,1.09-5.13,1.88-7.87,2.24c-4.81,0.63-9.65,0.77-14.49,0.98c-6.94,0.29-13.89,0.42-20.82,0.78
		c-4.15,0.21-8.32,0.13-12.43,0.87c-3.19,0.57-5.11,2.78-5.46,6.24c-0.38,3.74,0.79,5.93,4.07,7.12c2.2,0.8,3.45,2.27,4.06,4.45
		c0.8,2.9,1.31,5.86,1.67,8.84c0.94,7.79,1.41,15.61,1.75,23.45c0.46,10.58,0.65,21.13-0.31,31.69c-0.35,3.87-1.66,6.89-5.02,8.92
		c-0.88,0.53-1.5,1.3-1.83,2.3c-1.54,4.63,1.44,8.81,6.28,8.8c0.53,0,1.05-0.03,1.58-0.06c4.1-0.18,8.2-0.36,12.3-0.53
		c7.41-0.31,14.82-0.7,22.24-0.88c7.19-0.17,14.4-1.02,21.58,0.32c3.67,0.69,4.68,0.18,6.25-3.19c3.35-7.19,5.14-14.8,5.72-22.69
		c0.24-3.26-0.43-6.39-2.34-9.17c-1.88-2.74-5.04-2.89-7.16-0.33c-0.89,1.08-1.39,2.35-1.86,3.64c-0.71,1.93-1.3,3.9-2.06,5.8
		c-2.14,5.36-6.07,8.63-11.74,9.7c-4,0.75-8.04,0.96-12.1,0.45c-2.63-0.33-3.95-1.54-4.48-4.14c-1.13-5.54-1.39-11.17-1.72-16.79
		c-0.1-1.69,0.06-3.37,0.34-5.03c0.41-2.43,1.82-3.58,4.24-3.53c3.03,0.07,5.31,1.9,6.19,5.14c0.59,2.18,0.98,4.42,1.51,6.61
		c0.32,1.33,0.93,2.49,2.43,2.82c1.6,0.34,2.9-0.23,3.97-1.4c0.98-1.08,1.5-2.39,1.9-3.78
		C342.75,177.82,343.09,172.73,343.15,167.05z M325.53,82.86c-2.86,0.06-5.69,0.26-8.18,1.9c-1.79,1.18-2.39,2.51-1.56,4.44
		c0.95,2.22,0.33,3.84-1.29,5.36c-1.54,1.44-2.97,3-4.15,4.74c-1.54,2.26-1.47,4.68-0.29,7.05c1.01,2.03,2.97,2.46,4.98,2.38
		c10.17-0.4,17.21-5.94,22.28-14.2c2.33-3.8,0.77-7.75-3.23-9.78C331.41,83.39,328.54,82.78,325.53,82.86z'
          />
          <motion.path
            variants={pathVariants}
            className='st0'
            d='M97.37,297.14c-1.74,0-3.01,0.04-4.27-0.01c-4.22-0.14-7.45-3.02-8.15-7.21c-0.54-3.24-0.29-6.52-0.53-9.77
		c-0.32-4.41-0.35-8.83-0.45-13.25c-0.05-2.32,0.24-2.61,2.59-2.78c2.94-0.21,5.89-0.2,8.84-0.34c9.36-0.44,18.73-0.68,28.09-1.08
		c12.57-0.53,25.13-1.16,37.7-1.72c5.84-0.26,11.68-0.46,17.51-0.69c13.46-0.53,26.93-1.06,40.39-1.58
		c9.31-0.36,18.62-0.67,27.93-1.05c13.99-0.57,27.97-1.19,41.96-1.77c8.15-0.34,16.3-0.67,24.46-1c15.25-0.62,30.5-1.25,45.75-1.85
		c7-0.28,13.99-0.49,20.99-0.75c1.84-0.07,3.68-0.17,5.52-0.27c1.23-0.07,1.84,0.43,1.89,1.72c0.29,7.47,0.7,14.93,0.92,22.4
		c0.16,5.78-3.42,9.35-9.21,9.56c-14.46,0.53-28.93,1.08-43.39,1.66c-14.04,0.57-28.08,1.23-42.12,1.81
		c-13.83,0.57-27.66,1.08-41.5,1.62c-10.94,0.43-21.88,0.85-32.82,1.29c-13.3,0.53-26.61,1.02-39.91,1.61
		c-14.3,0.63-28.6,1.35-42.91,1.85C123.4,296.02,110.14,296.62,97.37,297.14z'
          />
          <motion.path
            variants={pathVariants}
            className='st0'
            d='M35.09,25.44c-0.94-6.57,5.48-10.3,10.29-10.64c5.2-0.36,10.41-0.47,15.61-0.73c1.48-0.07,2.06,0.54,2.12,2.02
		c0.37,9.94,0.81,19.88,1.2,29.81C64.87,60,65.34,74.1,66,88.19c0.19,4.14,0.15,8.3,0.72,12.44c0.32,2.28-0.04,4.7,0.06,7.07
		c0.51,12.2,0.91,24.4,1.41,36.6c0.59,14.35,1.25,28.71,1.85,43.06c0.44,10.67,0.84,21.35,1.25,32.03
		c0.54,13.88,1.07,27.77,1.62,41.65c0.41,10.41,0.84,20.82,1.26,31.23c0.06,1.37,0.18,2.73,0.24,4.1c0.04,0.8-0.17,1.58-1.12,1.61
		c-6.25,0.16-12.49,1.14-18.74,0.34c-1.9-0.24-3.64-1.02-5.22-2.12c-2.34-1.62-3.44-3.84-3.54-6.69
		c-0.42-12.36-0.82-24.72-1.38-37.08c-0.46-10.2-0.76-20.4-1.27-30.6c-0.77-15.35-1.32-30.71-2.01-46.06
		c-0.41-9.25-0.67-18.51-1.04-27.77c-0.5-12.62-1.04-25.24-1.54-37.86c-0.37-9.31-0.66-18.62-1.06-27.92
		c-0.42-9.99-0.96-19.97-1.39-29.96c-0.29-6.62-0.49-13.25-0.73-19.88C35.3,30.07,35.19,27.76,35.09,25.44z'
          />
          <motion.path
            variants={pathVariants}
            className='st0'
            d='M316.75,30.89c9.36-0.36,18.72-0.67,28.08-1.05c10.41-0.43,20.82-0.9,31.23-1.37c2.37-0.11,2.52,0,2.62,2.32
		c0.17,4.05,0.33,8.1,0.57,12.14c0.08,1.4-0.39,2.01-1.84,2.06c-6.94,0.26-13.88,0.59-20.82,0.87c-13.2,0.53-26.4,1.06-39.6,1.57
		c-6.52,0.25-13.04,0.45-19.56,0.72c-13.3,0.56-26.6,1.16-39.9,1.74c-5.47,0.24-10.94,0.47-16.41,0.69
		c-15.99,0.64-31.97,1.27-47.96,1.89c-9.31,0.36-18.62,0.67-27.93,1.04c-12.04,0.49-24.08,1.04-36.12,1.51l-33.66,1.4
		c-6.1,0.26-12.2,0.5-18.3,0.78c-1.52,0.07-1.92-0.8-1.92-2.07c-0.01-3.42,0-6.84,0-10.25c-0.38-4.37-0.99-4.15,3.86-4.33
		c10.2-0.38,20.4-0.93,30.6-1.36l89.69-3.57c9.36-0.37,18.72-0.67,28.08-1.06L316.75,30.89z'
          />
          <motion.path
            variants={pathVariants}
            className='st0'
            d='M370.62,1.5c3.11,0.02,6.71,3.3,7.11,8.11c0.18,2.15,0.19,4.31,0.3,6.46c0.06,1.26-0.62,1.64-1.75,1.68
		c-5.79,0.2-11.57,0.43-17.35,0.66c-12.67,0.51-25.34,1.03-38.01,1.56c-10.31,0.42-20.61,0.85-30.92,1.28
		c-12.2,0.5-24.4,1.02-36.6,1.5c-6.94,0.28-13.89,0.47-20.83,0.75c-11.88,0.48-23.76,1.01-35.65,1.49
		c-6.63,0.27-13.25,0.52-19.88,0.72c-2.53,0.08-5.05,0.19-7.55,0.56c-2.41,0.36-4.82,0.13-7.23,0.15c-5,0.04-9.99,0.37-14.99,0.59
		c-6.31,0.27-12.62,0.57-18.93,0.82c-16.2,0.64-32.39,1.27-48.59,1.89c-1.26,0.05-2.53,0.04-3.79,0.07
		c-1.08,0.03-1.68-0.41-1.72-1.56c-0.07-2.1-0.26-4.21-0.27-6.31c-0.03-4.98,3.48-8.58,8.45-8.78c11.36-0.45,22.72-0.82,34.07-1.35
		c14.35-0.67,28.7-1.36,43.06-1.84c10.78-0.36,21.56-0.82,32.34-1.26c14.25-0.59,28.5-1.22,42.74-1.8
		c6.99-0.29,13.99-0.46,20.98-0.76c10.04-0.43,20.08-0.95,30.12-1.38c7.05-0.3,14.1-0.49,21.14-0.77
		c15.04-0.6,30.08-1.23,45.12-1.83C357.64,1.93,363.26,1.76,370.62,1.5z'
          />
          <motion.path
            variants={pathVariants}
            className='st0'
            d='M253.65,186.78c0.07,2.98-0.18,5.9-1.29,8.7c-0.63,1.6-1.53,2.99-2.8,4.15c-2.32,2.11-5.26,2.52-8.04,1.05
		c-2.6-1.37-4.48-3.49-5.8-6.08c-5.42-10.65-8.91-21.91-10.47-33.76c-0.56-4.29-0.93-8.59,0.29-12.84c0.48-1.68,1.1-3.3,2.06-4.76
		c2.38-3.62,6.36-4.46,10.05-2.18c3.62,2.24,5.77,5.71,7.45,9.4C250.33,161.99,253.26,174.1,253.65,186.78z'
          />
        </g>
        <g id='plqWjq.tif_1_'>
          <g>
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M194.64,398.17c-5.05,0-10.11,0.19-15.15-0.04c-7.54-0.35-15.08-0.61-22.6-1.2
			c-6.09-0.48-12.17-1.03-18.25-1.62c-4.76-0.46-9.51-1.13-14.26-1.73c-5.26-0.66-10.52-1.31-15.76-2.04
			c-5.96-0.83-11.9-1.75-17.86-2.61c-4.99-0.72-9.99-1.39-14.97-2.15c-4.61-0.7-9.25-1.24-13.9-1.61
			c-7.82-0.63-15.64-0.98-23.51-0.32c-6.84,0.57-13.52,1.78-20.04,3.89c-2.66,0.86-5.25,1.93-7.76,3.16
			c-1.71,0.84-3.46,1.36-5.39,0.67c-2.06-0.74-3.55-2.5-3.68-4.58c-0.16-2.46,0.5-4.55,2.88-5.74c7.29-3.64,14.95-6.13,22.98-7.57
			c7.38-1.32,14.82-1.73,22.29-1.6c8.06,0.15,16.08,0.92,24.07,1.97c8.07,1.05,16.09,2.42,24.15,3.52
			c8.52,1.16,17.03,2.44,25.56,3.57c4.87,0.64,9.77,1.05,14.65,1.64c5.73,0.69,11.47,1.17,17.22,1.63
			c3.55,0.28,7.11,0.48,10.66,0.69c11.61,0.67,23.22,1.11,34.85,0.83c9.79-0.23,19.58-0.51,29.35-1.21
			c6.6-0.47,13.2-0.95,19.78-1.56c6.41-0.59,12.81-1.37,19.2-2.14c5.51-0.66,11.02-1.36,16.52-2.14c5.79-0.82,11.56-1.75,17.34-2.66
			c5.15-0.8,10.3-1.6,15.44-2.46c5.26-0.87,10.52-1.81,15.78-2.72c5.76-1,11.52-2,17.27-3.03c4.84-0.87,9.66-1.8,14.49-2.68
			c4.59-0.83,9.18-1.62,13.76-2.45c5.58-1.02,11.16-2.07,16.74-3.09c4.75-0.87,9.5-1.73,14.25-2.6c1.33-0.24,2.67-0.5,4-0.76
			c4.28-0.85,7.63,1.92,7.32,6.07c-0.19,2.54-2,4.5-4.5,4.96c-8.17,1.5-16.33,3.03-24.49,4.53c-6.46,1.18-12.92,2.32-19.38,3.51
			c-6.54,1.2-13.07,2.45-19.61,3.62c-5.71,1.03-11.44,1.98-17.15,2.97c-6.97,1.21-13.93,2.47-20.91,3.61
			c-6.48,1.06-12.98,2.02-19.47,3c-5.07,0.76-10.14,1.52-15.21,2.22c-4.16,0.57-8.33,1.06-12.5,1.55
			c-4.88,0.57-9.76,1.13-14.65,1.65c-3.92,0.42-7.84,0.82-11.78,1.12c-6.68,0.52-13.36,1.14-20.05,1.39
			c-6.69,0.24-13.39,0.73-20.09,0.6c-2.55-0.05-5.09-0.01-7.64-0.01C194.65,398.2,194.65,398.18,194.64,398.17z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M152.26,341.12c0.13-1.99,0.15-3.97-0.19-5.95c-0.2-1.19,0.05-2.38,0.41-3.5c0.56-1.72,2.93-2.47,4.47-1.51
			c0.7,0.44,0.9,1.1,0.84,1.86c-0.08,1.01-0.24,2.02-0.3,3.03c-0.03,0.46,0.07,1.03,0.57,1.17c0.47,0.13,0.72-0.37,0.93-0.72
			c0.93-1.52,1.79-3.07,2.74-4.57c0.8-1.27,1.84-2.2,3.52-2.05c1.45,0.13,2.3,0.92,2.47,2.38c0.13,1.13,0.3,2.26,0.5,3.39
			c0.15,0.84,0.61,1,1.21,0.37c0.64-0.67,1.23-1.4,1.84-2.1c1.2-1.36,2.53-2.5,4.42-2.79c1.93-0.3,2.96,0.4,3.13,2.32
			c0.42,4.67,1.16,9.34,0.26,14.04c-0.34,1.79-0.72,3.57-1.45,5.24c-0.56,1.27-3.36,1.71-4.33,0.7c-0.71-0.73-0.3-1.53-0.06-2.27
			c0.94-3.02,1.38-6.09,1.31-9.26c-0.03-1.45-0.32-2.86-0.48-4.29c-0.04-0.35-0.12-0.68-0.54-0.75c-0.39-0.06-0.67,0.17-0.84,0.46
			c-0.57,0.94-1.14,1.89-1.65,2.86c-1.12,2.14-2.05,4.36-2.9,6.63c-0.21,0.55-0.37,1.15-0.86,1.53c-0.98,0.79-2.07,1.48-3.37,1.01
			c-1.37-0.5-1.64-1.79-1.58-3.05c0.09-1.73,0.39-3.44,0.54-5.17c0.07-0.78,0.29-1.98-0.43-2.19c-0.7-0.2-0.92,1.03-1.24,1.67
			c-1.2,2.38-2.14,4.88-3.49,7.19c-0.48,0.82-1.03,1.56-2.06,1.76c-1.93,0.37-3-0.48-3.26-2.71
			C152.21,344.25,152.18,342.68,152.26,341.12z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M306.65,340.93c0.26,3.42-0.19,6.75-1.33,9.98c-0.65,1.85-2.52,2.61-4.28,1.74c-0.91-0.45-0.85-1.26-0.6-1.98
			c0.88-2.54,1.35-5.14,1.43-7.83c0.05-1.91-0.07-3.8-0.29-5.69c-0.06-0.5-0.02-1.22-0.72-1.33c-0.61-0.09-0.83,0.53-1.08,0.94
			c-1.77,2.85-3.06,5.94-4.29,9.05c-0.14,0.35-0.27,0.72-0.48,1.03c-0.72,1.11-2.59,1.91-3.66,1.53c-1.39-0.49-1.5-1.69-1.5-2.92
			c0-1.4,0.01-2.79,0.34-4.17c0.11-0.45,0.17-0.92,0.16-1.38c-0.01-0.69,0.26-1.7-0.54-1.91c-0.8-0.21-0.87,0.85-1.15,1.4
			c-1.25,2.5-2.24,5.11-3.67,7.53c-0.57,0.97-1.32,1.63-2.53,1.64c-1.5,0.02-2.15-0.49-2.49-1.97c-0.31-1.33-0.46-2.66-0.44-4.02
			c0.03-2.96,0-5.91-0.03-8.87c-0.01-0.87,0.15-1.68,0.53-2.46c0.61-1.25,2.1-1.78,3.75-1.35c1.09,0.28,1.45,1.06,1.32,2.65
			c-0.08,0.93-0.09,1.86-0.11,2.79c-0.01,0.29,0.03,0.63,0.37,0.74c0.31,0.1,0.57-0.09,0.78-0.32c0.61-0.66,0.99-1.47,1.44-2.24
			c0.66-1.13,1.25-2.31,2.07-3.34c0.88-1.1,2.01-1.52,3.38-1.28c1.05,0.18,1.8,0.73,1.97,1.86c0.17,1.09,0.3,2.18,0.47,3.27
			c0.08,0.5,0.1,1.12,0.63,1.3c0.51,0.17,0.78-0.41,1.08-0.73c0.75-0.8,1.43-1.68,2.2-2.46c1.4-1.39,2.99-2.37,5.1-1.97
			c1.07,0.2,1.65,0.86,1.71,1.91c0.09,1.48,0.26,2.95,0.42,4.42C306.77,337.96,306.65,339.45,306.65,340.93z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M18.22,350.43c-2.7,0.02-4.93-0.4-7.05-1.35c-1.65-0.74-2.02-1.86-1.23-3.51c0.34-0.71,0.85-1.27,1.45-1.74
			c0.74-0.57,1.53-0.63,2.1,0.21c0.67,0.97,1.59,1.33,2.71,1.4c0.5,0.03,1.01,0.14,1.48,0.31c2.38,0.86,4.44,0,6.37-1.24
			c1.25-0.8,1.23-2.48,0.1-3.81c-1.65-1.96-3.68-3.5-5.74-4.98c-3-2.16-5.9-4.42-8.2-7.36c-1.1-1.41-1.11-2.09,0.16-3.39
			c1.35-1.39,2.94-2.44,4.74-3.12c4.06-1.53,8.33-2.21,12.58-2.96c0.71-0.13,1.43-0.03,2.07,0.41c1.35,0.94,1.25,2.56-0.24,3.22
			c-1.95,0.87-4.06,1.15-6.16,1.45c-1.97,0.29-3.95,0.58-5.77,1.44c-1.63,0.77-1.77,1.42-0.59,2.8c1.33,1.55,2.93,2.81,4.58,4.01
			c1.61,1.17,3.2,2.36,4.77,3.59c1.32,1.04,2.29,2.34,2.88,3.95c1.31,3.61-1.22,8.17-5.53,9.66
			C21.8,350.07,19.86,350.5,18.22,350.43z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M309.26,348.66c0.14-5.14,0.72-9.37,1.28-13.6c0.12-0.93,0.12-1.79-0.12-2.74c-0.32-1.24,0.55-2.42,0.65-3.68
			c0.12-1.41,1.07-2.04,2.39-2.2c1.48-0.18,2.2,0.23,2.46,1.71c0.21,1.21,0.86,1.61,1.98,1.68c1.49,0.1,2.91,0.56,4.28,1.15
			c4.16,1.82,4.69,6.74,1.07,9.51c-1.4,1.07-3.07,1.39-4.7,1.85c-1.34,0.38-2.7,0.72-4.05,1.08c-0.58,0.15-0.96,0.5-1.09,1.11
			c-0.79,3.95-0.38,7.74,1.55,11.31c0.7,1.31,0.35,2.04-1.1,2.12c-2.38,0.14-3.67-0.94-3.98-3.61
			C309.62,352.19,309.1,350.03,309.26,348.66z M314.29,337.79c-0.03,1.83,0.39,2.23,2.24,2.1c2.03-0.14,3.84-1.53,4.43-3.42
			c0.43-1.36-0.01-2.31-1.31-2.87c-2.76-1.17-4.04-0.6-5.03,2.2C314.4,336.46,314.3,337.12,314.29,337.79z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M150.7,334.56c0.13,2.19-0.53,4.27-0.96,6.37c-0.5,2.41-0.52,4.87-0.87,7.3c-0.12,0.85-0.33,1.67-0.66,2.44
			c-0.43,0.99-1.63,1.35-2.14,0.52c-1.28-2.08-3.41-1.74-5.27-2.19c-0.78-0.19-1.59-0.28-2.35-0.52c-3.99-1.26-5.39-5.95-2.85-9.43
			c1.95-2.68,4.73-3.72,7.9-3.97c0.67-0.05,1.36-0.03,2.03-0.01c0.87,0.02,1.5-0.2,1.56-1.22c0.06-0.97-0.09-1.79-1.19-2.09
			c-1.3-0.35-2.53,0.01-3.73,0.43c-0.88,0.3-1.73,0.68-2.6,1.03c-0.86,0.34-1.65,0.45-2.18-0.54c-0.64-1.17-0.65-2.68,0.14-3.15
			c3.13-1.86,6.47-2.58,9.97-1.29c2.1,0.77,2.89,2.62,3.18,4.69C150.77,333.45,150.7,334.01,150.7,334.56z M143.57,345.92
			c0.5-0.08,1.39,0.28,1.72-0.62c0.64-1.74,1.24-3.51,1.01-5.42c-0.11-0.96-0.58-1.33-1.56-1.1c-1.27,0.3-2.57,0.52-3.84,0.83
			c-0.88,0.21-1.65,0.66-2.25,1.35c-1.3,1.5-0.96,3.2,0.83,4.02C140.73,345.54,142.01,345.98,143.57,345.92z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M234.42,355.52c0,0.55-0.01,1.1,0,1.65c0.01,1-0.26,1.77-1.43,1.86c-1.13,0.09-1.86-0.38-2.18-1.49
			c-0.6-2.1-0.45-4.29-0.71-6.43c-0.37-3.15-0.22-6.34-0.7-9.49c-0.06-0.38-0.05-0.76-0.1-1.14c-0.39-2.67-0.4-2.68-2.9-1.73
			c-0.78,0.3-1.57,0.4-2.37,0.29c-0.85-0.11-1.56-0.49-1.74-1.41c-0.19-0.98,0.29-1.7,1.14-2.04c1.02-0.41,2.09-0.69,3.16-0.96
			c2.42-0.62,3.06-1.37,3.33-3.81c0.27-2.52,0.61-5.04,0.94-7.55c0.13-1.01,0.62-1.79,1.71-1.92c1.28-0.16,2.6-0.21,3.52,0.91
			c0.44,0.53,0.18,1.2-0.07,1.81c-1.09,2.69-1.69,5.48-1.66,8.41c0.01,1.04,0.3,1.45,1.41,1.31c1.3-0.16,2.62-0.17,3.93-0.2
			c0.71-0.01,1.4,0.21,1.64,0.96c0.26,0.79-0.23,1.39-0.77,1.88c-0.58,0.52-1.31,0.75-2.1,0.8c-1.23,0.07-2.45,0.23-3.68,0.23
			c-1.16,0-1.48,0.62-1.45,1.6c0.07,2.03,0.11,4.06,0.26,6.09c0.25,3.46,0.58,6.91,0.87,10.37
			C234.46,355.52,234.44,355.52,234.42,355.52z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M248.14,334.17c-0.23,2.81,0.04,5.74,0.93,8.61c0.16,0.52,0.34,1.06,0.63,1.51c0.61,0.94,1.41,0.79,2.18,0.18
			c2.07-1.64,3.21-3.81,3.52-6.39c0.33-2.84-0.02-5.58-1.52-8.09c-0.26-0.43-0.44-0.91-0.62-1.39c-0.25-0.66-0.35-1.35,0.22-1.9
			c0.56-0.53,1.26-0.69,2.01-0.47c2.36,0.71,3.52,2.57,3.92,4.75c0.81,4.45,0.22,8.8-1.89,12.82c-1.57,2.99-3.96,4.92-7.6,4.85
			c-1.73-0.03-3-0.81-3.97-2.15c-1.72-2.36-2.43-5.1-2.8-7.93c-0.37-2.78-0.17-5.58,0.01-8.36c0.13-2.12,2.51-3.25,4.34-2.1
			c0.54,0.34,0.65,0.85,0.65,1.43c-0.01,0.76,0,1.52,0,2.29C248.14,332.55,248.14,333.27,248.14,334.17z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M61.38,333.89c-0.31,3.19,0.17,6.15,0.98,9.06c0.65,2.32,1.75,2.6,3.48,0.91c3.19-3.12,3.92-8.81,1.71-13.11
			c-0.35-0.68-0.69-1.36-0.99-2.06c-0.27-0.64-0.44-1.34,0.11-1.9c0.61-0.62,1.38-0.79,2.23-0.51c2.17,0.72,3.35,2.47,3.72,4.48
			c0.87,4.7,0.33,9.3-2.09,13.51c-1.57,2.72-3.88,4.41-7.22,4.4c-2.18-0.01-3.61-1.14-4.6-2.88c-1.62-2.85-2.4-5.95-2.4-9.23
			c0-2.03,0.02-4.06,0.09-6.09c0.08-2.31,2.23-3.49,4.24-2.37c0.65,0.36,0.76,0.97,0.75,1.63c-0.01,0.72-0.02,1.44-0.02,2.16
			C61.38,332.6,61.38,333.32,61.38,333.89z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M366.17,350.69c-2.4,0.08-4.43-0.82-5.7-3.1c-0.67-1.2-0.28-2.39,0.9-3c0.85-0.44,1.56-0.4,2.21,0.47
			c1.63,2.19,4.56,2.41,6.63,0.57c1.5-1.33,1.37-3.05-0.47-4.03c-1.79-0.96-3.69-1.7-5.55-2.51c-1.31-0.57-2.41-1.42-3.3-2.52
			c-1.25-1.55-1.29-3.01-0.18-4.66c2.21-3.29,6.24-4.56,9.9-3.12c1.18,0.46,2.39,0.87,3.45,1.58c0.57,0.38,1.1,0.8,1.45,1.4
			c0.49,0.83,0.53,1.73-0.04,2.51c-0.56,0.76-1.45,0.74-2.21,0.41c-1.31-0.59-2.55-1.34-3.84-1.96c-1.12-0.54-2.28-0.9-3.54-0.31
			c-1.05,0.5-1.35,1.28-0.72,2.25c0.53,0.83,1.24,1.48,2.18,1.87c1.88,0.77,3.75,1.56,5.47,2.67c3.7,2.39,3.87,6.25,0.4,9.07
			C371.2,349.91,368.91,350.75,366.17,350.69z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M203.92,350.69c-3.55,0.04-5.64-0.72-6.94-3.01c-0.72-1.28-0.3-2.58,1.01-3.17c0.84-0.37,1.51-0.26,2.1,0.55
			c1.61,2.21,4.78,2.4,6.71,0.45c1.29-1.3,1.16-2.85-0.4-3.82c-1.77-1.1-3.79-1.68-5.66-2.58c-1.36-0.65-2.6-1.45-3.49-2.68
			c-1.14-1.58-1.16-2.99-0.01-4.57c1.21-1.66,2.85-2.75,4.77-3.45c1.59-0.58,3.14-0.55,4.69,0.21c0.95,0.47,1.96,0.79,2.92,1.25
			c0.57,0.27,1.11,0.63,1.58,1.04c1.29,1.12,1.56,2.32,0.82,3.33c-0.6,0.81-1.62,0.86-3.12,0.1c-0.94-0.48-1.85-1.03-2.8-1.51
			c-0.49-0.25-1.01-0.45-1.54-0.59c-1.17-0.31-2.8,0.14-3.09,0.92c-0.47,1.25,0.47,1.99,1.23,2.69c0.88,0.82,2.1,1.07,3.18,1.54
			c1.4,0.62,2.76,1.32,4.01,2.2c2.6,1.83,3.1,3.9,1.47,6.67C209.46,349.46,206.4,350.56,203.92,350.69z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M352.46,349.49c-3.83,0.31-7.17-2.45-8.46-6.83c-0.73-2.49-1.06-5.04-0.75-7.64
			c0.71-5.98,6.56-7.63,10.89-5.32c2.36,1.26,3.84,3.24,4.42,5.9c0.24,1.12-0.01,1.97-0.82,2.75c-1.24,1.19-2.76,1.95-4.19,2.85
			c-1.04,0.65-2.08,1.31-3.08,2.02c-1.02,0.72-1,1.44-0.01,2.21c1.54,1.2,3.17,0.89,4.82,0.29c0.4-0.14,0.78-0.33,1.18-0.48
			c1.11-0.42,1.69-0.06,1.8,1.1c0.11,1.22-0.68,2.4-1.88,2.66C355.05,349.3,353.72,349.6,352.46,349.49z M347.25,336.45
			c-0.01,1.61,0.48,2.54,1.44,2.67c1.97,0.25,4.49-1.32,5.19-3.18c0.41-1.09,0.11-1.92-0.81-2.53c-1.32-0.86-2.72-1.18-4.21-0.42
			C347.47,333.69,347.34,335.01,347.25,336.45z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M84.82,349.01c-1.79,0.11-3.48-0.28-5.14-0.84c-3.44-1.17-5.67-4.25-5.83-7.85
			c-0.19-4.36,1.31-7.95,4.64-10.77c1.58-1.34,3.04-2.84,4.99-3.68c1.32-0.57,2.67-0.8,4.08-0.32c0.93,0.32,1.25,0.93,0.98,1.87
			c-0.41,1.41-1.42,2.27-2.7,2.86c-2,0.93-4.01,1.82-5.51,3.55c-1.95,2.25-2.5,4.73-1.51,7.55c0.58,1.63,1.73,2.53,3.31,3.24
			c2.5,1.13,4.57,0.77,6.53-1c0.09-0.08,0.2-0.15,0.32-0.21c0.76-0.42,1.58-1.26,2.4-0.55c0.89,0.76,0.35,1.85-0.08,2.7
			C89.97,348.21,87.69,349.21,84.82,349.01z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M326.8,330.04c-0.01-1.41,0.62-2.31,1.97-2.76c1.02-0.35,2.21,0.14,2.96,1.21c0.45,0.64,0.65,1.38,0.76,2.14
			c0.17,1.13,0.77,1.24,1.56,0.61c0.9-0.71,1.72-1.5,2.6-2.24c1.46-1.23,2.66-1.34,4.19-0.42c1.03,0.62,1.17,1.21,0.45,2.18
			c-0.81,1.1-1.85,1.98-2.89,2.85c-0.52,0.43-1.01,0.92-1.57,1.3c-2.57,1.75-2.89,4.54-3.38,7.23c-0.13,0.7,0.26,1.39,0.64,2.02
			c1.16,1.88,1.01,3.62-0.38,5.26c-0.77,0.9-1.74,1.28-2.84,0.89c-1.11-0.39-1.81-1.18-1.79-2.49c0.08-4.07-0.34-8.11-0.81-12.15
			c-0.17-1.46-0.75-2.77-1.19-4.13C326.92,331.03,326.8,330.56,326.8,330.04z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M401.53,342.95c0.51-2.87-0.09-5.74-0.04-8.61c0.01-0.76,0.02-1.51,0.29-2.25c0.45-1.2,1.14-1.6,2.46-1.4
			c1.21,0.19,1.46,1.02,1.37,2.05c-0.05,0.63-0.17,1.26-0.28,1.88c-0.07,0.4-0.1,0.8,0.29,1.02c0.52,0.3,0.65-0.23,0.85-0.5
			c0.47-0.65,0.89-1.34,1.35-2c0.47-0.67,1.06-1.21,1.8-1.57c1.67-0.81,2.79-0.37,3.54,1.32c1.43,3.21,1.54,6.64,1.79,10.06
			c0.1,1.35,0.13,2.7,0.21,4.05c0.08,1.29-0.37,1.81-1.75,1.98c-1.62,0.19-1.97-0.03-2.19-1.49c-0.48-3.1-0.13-6.26-0.69-9.36
			c-0.09-0.51,0.16-1.29-0.51-1.42c-0.71-0.14-0.9,0.65-1.19,1.13c-1.21,2.05-1.86,4.35-2.81,6.52c-0.88,2.02-1.64,2.71-2.9,2.48
			c-1.07-0.19-1.56-1.25-1.59-3.38C401.53,343.29,401.53,343.12,401.53,342.95z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M117.49,342.97c0.86-3.39-0.47-6.99,0.21-10.57c0.23-1.2,0.87-1.78,2.08-1.76c1.32,0.03,2.04,0.82,1.89,2.14
			c-0.08,0.67-0.24,1.33-0.34,2c-0.05,0.34-0.07,0.74,0.3,0.89c0.41,0.17,0.6-0.23,0.78-0.49c0.49-0.69,0.95-1.4,1.43-2.1
			c0.49-0.71,1.1-1.32,1.93-1.59c1.67-0.56,2.73-0.36,3.38,1.28c1.19,3.01,1.58,6.12,1.72,9.3c0.07,1.65,0.02,3.29,0.33,4.93
			c0.23,1.19-0.48,1.84-1.9,1.97c-1.58,0.14-1.9-0.11-2.09-1.45c-0.47-3.23-0.21-6.51-0.74-9.74c-0.07-0.43,0.05-1.11-0.47-1.2
			c-0.57-0.1-0.78,0.56-1.04,0.97c-1.34,2.18-1.94,4.68-3.05,6.96c-0.24,0.49-0.46,1-0.75,1.47c-0.49,0.78-1.25,0.98-2.11,0.82
			c-0.83-0.15-1.19-0.74-1.28-1.53C117.69,344.59,117.6,343.87,117.49,342.97z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M48.06,332.71c0.03-2.86-0.57-5.51-0.88-8.2c-0.17-1.43,0.05-2.78,0.59-4.09c0.39-0.94,1.1-1.45,2.13-1.56
			c1.72-0.19,2.56,0.44,2.44,2.17c-0.2,3.05-0.13,6.09-0.12,9.14c0.01,4.44,0.09,8.89,0.16,13.33c0.03,1.8-0.33,3.54-0.96,5.21
			c-0.56,1.48-1.6,2.02-2.99,1.6c-1.38-0.42-2.01-1.32-1.6-2.84C48.15,342.58,47.75,337.55,48.06,332.71z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M102.63,336.62c-0.09-2.03,0.57-3.88,1.69-5.58c0.51-0.78,1.07-1.52,1.57-2.31c1.31-2.1,3.55-2.53,5.61-1.02
			c1.69,1.24,2.53,3.04,3.19,4.93c1.58,4.5-0.56,8.19-3.26,10.88c-1.01,1.01-3.39,1.14-4.8,0.37
			C103.8,342.32,102.59,339.82,102.63,336.62z M111.23,336.48c0-1.6-0.49-2.99-1.27-3.92c-0.58-0.69-1.19-0.74-1.87-0.18
			c-0.93,0.77-1.61,1.73-2.03,2.87c-0.4,1.09-0.45,2.16,0.43,3.07c0.8,0.83,2.47,1.21,3.42,0.77
			C111.1,338.54,111.3,337.49,111.23,336.48z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M32.22,336.14c-0.1-1.52,0.64-3.35,1.72-5.05c0.55-0.86,1.14-1.68,1.7-2.53c1.13-1.72,2.84-2.2,4.71-1.27
			c0.45,0.22,0.92,0.49,1.25,0.85c4.4,4.78,4.43,10.81-0.71,15.47c-1.36,1.23-3.23,1.04-4.8,0.17
			C33.35,342.26,32.24,339.76,32.22,336.14z M40.92,336.59c0.02-1.56-0.42-2.77-1.22-3.86c-0.67-0.92-1.4-0.99-2.23-0.2
			c-0.8,0.76-1.39,1.68-1.8,2.72c-0.47,1.17-0.45,2.26,0.52,3.14c0.94,0.85,2.1,1.16,3.3,0.71
			C40.71,338.65,40.9,337.54,40.92,336.59z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M392.85,344.3c-2.69,0.34-5.38-2.59-5.96-5.23c-0.66-3.01-0.13-5.79,1.65-8.33c0.49-0.69,0.97-1.39,1.43-2.1
			c1.2-1.86,2.92-2.36,4.88-1.3c2.44,1.32,3.42,3.69,4.05,6.19c0.99,3.96-0.66,7.1-3.33,9.86
			C394.81,344.19,393.84,344.41,392.85,344.3z M395.35,336.38c-0.01-1.46-0.56-2.72-1.44-3.85c-0.45-0.59-1.05-0.76-1.66-0.26
			c-1.2,0.99-2.16,2.16-2.35,3.78c-0.23,1.87,0.81,3.08,2.72,3.21C394.33,339.37,395.34,338.31,395.35,336.38z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M182.6,336.31c-0.11-1.75,0.58-3.58,1.71-5.28c0.54-0.81,1.11-1.6,1.64-2.41c1.18-1.83,2.96-2.3,4.9-1.26
			c2.11,1.12,3.03,3.13,3.78,5.21c1.57,4.36-0.19,7.83-3.14,10.89c-1.04,1.08-3.4,1.24-4.89,0.42
			C183.73,342.31,182.56,339.8,182.6,336.31z M191.23,336.4c0.01-1.32-0.45-2.64-1.19-3.68c-0.64-0.9-1.37-0.93-2.15-0.24
			c-0.91,0.8-1.54,1.79-1.94,2.94c-0.37,1.07-0.36,2.08,0.52,2.94c0.85,0.83,2.49,1.17,3.43,0.72
			C191.04,338.54,191.21,337.5,191.23,336.4z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M271.11,342.6c0.51-3.13-0.06-6.34,0.81-9.43c0.57-2.01,2.45-2.78,4.3-1.79c0.99,0.54,1.25,1.29,0.66,2.29
			c-0.6,1.01-0.87,2.09-0.92,3.25c-0.03,0.76-0.09,1.53-0.28,2.26c-0.42,1.64-0.35,3.26-0.04,4.9c0.06,0.33,0.13,0.66,0.16,1
			c0.14,1.81-0.16,2.38-1.32,2.53c-2.11,0.27-2.7-0.13-3.09-1.97C271.17,344.62,271.13,343.62,271.11,342.6z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M378,342.8c0.61-3.03-0.09-6.29,0.77-9.45c0.56-2.06,2.26-2.92,4.2-2.06c1.15,0.51,1.44,1.34,0.81,2.43
			c-0.58,1.01-0.94,2.07-0.91,3.25c0.06,2.07-0.98,4.04-0.48,6.16c0.2,0.86,0.46,1.71,0.46,2.62c0,1.1-0.4,1.77-1.59,1.85
			c-1.85,0.13-2.69-0.25-2.89-1.5C378.19,345.07,378.13,344.01,378,342.8z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M94.15,341.15c0.09-2.81,0-5.19,0.51-7.52c0.49-2.28,2.37-3.28,4.37-2.3c1.09,0.53,1.36,1.33,0.76,2.37
			c-0.37,0.63-0.69,1.29-0.73,2.01c-0.16,2.83-1.4,5.61-0.41,8.5c0.09,0.27,0.06,0.59,0.07,0.88c0.08,2.32-0.29,2.68-2.58,2.53
			c-1.18-0.08-1.75-0.67-1.91-2.1C94.04,343.91,94.08,342.3,94.15,341.15z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M394.9,324.92c-0.55,0-1.1,0.01-1.61-0.26c-0.83-0.45-1.13-1.25-0.5-1.87c1.47-1.46,2.7-3.3,4.97-3.7
			c0.21-0.04,0.42-0.07,0.63-0.09c0.95-0.05,1.96-0.06,2.46,0.89c0.52,0.98-0.27,1.68-0.87,2.3
			C398.59,323.65,397.08,324.93,394.9,324.92z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M98.29,322.61c1.59-0.01,2.37,0.63,2.38,1.97c0.02,1.72-1.28,3.16-2.83,3.14c-1.39-0.02-2.66-1.16-2.67-2.39
			C95.16,323.61,96.29,322.62,98.29,322.61z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M275.37,322.61c1.55-0.02,2.46,0.67,2.5,1.9c0.05,1.57-1.36,3.17-2.82,3.21c-1.48,0.04-2.62-1.03-2.63-2.46
			C272.41,323.48,273.35,322.64,275.37,322.61z'
            />
            <motion.path
              variants={pathVariants}
              className='st0'
              d='M382.38,322.61c1.54,0.02,2.39,0.74,2.37,2.02c-0.03,1.64-1.45,3.13-2.94,3.07
			c-1.47-0.05-2.57-1.16-2.53-2.58C379.32,323.46,380.39,322.59,382.38,322.61z'
            />
          </g>
        </g>
      </motion.svg>
    </>
  );
};

export default Logo;