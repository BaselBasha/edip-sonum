import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function EditSales() {
    const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);

    const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedPhoto(file);
            // Handle the photo upload here, e.g., save it or display a preview
            console.log(`Uploaded photo: ${file.name}`);
        }
    };

    return (
        <div className="w-full flex items-center justify-center bg-gray-100 p-4 md:p-10">
            <div className="flex flex-col items-center justify-center bg-white border-2 border-dashed border-gray-400 shadow-lg rounded-lg p-6 md:p-8 hover:bg-gray-200 transition-all duration-300 cursor-pointer max-w-md w-full">
                <FaPlus className="text-3xl text-gray-600 mb-4" />
                <p className="text-lg text-gray-600 mb-4">Add New Sales</p>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    id="photoUpload"
                />
                <label
                    htmlFor="photoUpload"
                    className="bg-blue-500 text-white rounded-full px-4 py-2 cursor-pointer hover:bg-blue-700 transition-colors duration-300"
                >
                    Upload Photo
                </label>
                {selectedPhoto && (
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">Selected photo: {selectedPhoto.name}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EditSales;
