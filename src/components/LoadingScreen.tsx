import React from 'react';
// Correctly import the image from your src folder
import LoadingImage from '../../public/loadingscreen/loading.jpg';

const LoadingScreen: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
            <div className="relative flex items-center justify-center">
                {/* Rotating image container */}
                <div className="animate-spin flex items-center justify-center">
                    <img
                        className="w-32 h-32 rounded-full"
                        src={LoadingImage}
                        alt="Loading"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
