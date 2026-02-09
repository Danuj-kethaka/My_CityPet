import { useEffect } from "react";
import { usePetProfileStore } from "../../../store/PetProfile/PetProfile.js";

const AdminPetProfile = () => {
  const { PetProfile, fetchPetProfile } = usePetProfileStore();

  useEffect(() => {
    fetchPetProfile();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        🐾 Pet Profiles (Admin)
      </h2>

      {PetProfile.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500">
          No pet profiles found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PetProfile.map((pet) => (
            <div
              key={pet._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">
                {pet.Petname}
              </h3>

              <div className="text-sm text-gray-700 space-y-1">
                <p><span className="font-medium">Category:</span> {pet.category}</p>
                <p><span className="font-medium">Breed:</span> {pet.breed}</p>
                <p><span className="font-medium">Age:</span> {pet.Age}</p>
                <p><span className="font-medium">Sex:</span> {pet.sex}</p>
                <p><span className="font-medium">Weight:</span> {pet.weight}</p>
              </div>

              <div className="mt-3 pt-3 border-t text-sm text-gray-600">
                <span className="font-medium">Medical History:</span>
                <p className="mt-1">{pet.medicalhistory}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPetProfile;
