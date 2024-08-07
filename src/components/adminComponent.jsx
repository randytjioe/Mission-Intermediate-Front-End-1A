import React, { useEffect } from "react";
import FilmForm from "./filmForm";
import { PiPencilSimpleLineBold } from "react-icons/pi";
import { IoTrashBin } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import Swal from "sweetalert2";
import useModal from "../hooks/useModal";
import useFilms from "../hooks/useFilm";


export default function AdminComponent() {
  const {
    films,
    editingIndex,
    setEditingIndex,
    addFilm,
    loadFilms,
    updateFilm,
    deleteFilm,
  } =  useFilms();

  const { isModalOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    loadFilms();
  }, [loadFilms]);

  const handleAddFilm = (film) => {
    addFilm(film);
    closeModal();
  };

  const handleUpdateFilm = (updatedFilm) => {
    updateFilm(updatedFilm);
    closeModal();
  };

  const handleEditFilm = (id) => {
    setEditingIndex(id);
    openModal();
  };

  const handleDeleteFilm = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteFilm(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your film has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Page - Film Management</h1>
      <button
        onClick={openModal}
        className="block px-3 py-2 mb-4 text-white bg-black rounded hover:bg-white hover:text-black hover:border"
      >
        Add Film
      </button>
      {isModalOpen && (
        <div
          id="crud-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-h-full overflow-y-auto max-w-md h-auto scrollbar-hide">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {editingIndex !== null ? "Edit Film" : "Create New Film"}
                </h3>
                <button
                  type="button"
                  className="text-black bg-transparent hover:bg-red-500 hover:text-white rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeModal}
                >
                  <RxCrossCircled className="w-5 h-5" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4">
                <FilmForm
                  onAddFilm={handleAddFilm}
                  onUpdateFilm={handleUpdateFilm}
                  editingFilm={
                    editingIndex !== null
                      ? films.find((film) => film.id === editingIndex)
                      : null
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Director
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Genre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Label
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {films.map((film, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{film.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {film.director}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{film.year}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{film.genre}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {film.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{film.label}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEditFilm(film.id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      <PiPencilSimpleLineBold className="w-8 h-8 bg-yellow-200 text-black p-2 border rounded-full" />
                    </button>
                    <button
                      onClick={() => handleDeleteFilm(film.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <IoTrashBin className="w-8 h-8 bg-red-500 text-white p-2 border rounded-full" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
