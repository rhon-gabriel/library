import React from "react";

const Modal = ({ showModal, setShowModal, selectedBook }) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      {showModal && (
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{selectedBook.title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="grid grid-cols-2 p-4">
              <img
                alt="Book Cover"
                className="rounded-lg h-40 mx-auto"
                src={`https://covers.openlibrary.org/b/id/${selectedBook?.cover_i}.jpg`}
              />
              <div>
                {selectedBook?.author_name && (
                  <p className="text-slate-500 text-lg">
                    Author: {selectedBook?.author_name[0]}
                  </p>
                )}
                {selectedBook?.publish_year && (
                  <p className="text-slate-500 text-lg">
                    Publication year: {selectedBook?.publish_year[0]}
                  </p>
                )}
                {selectedBook?.ratings_average && (
                  <p className="text-slate-500 text-lg">
                    Rating: {Math.round(selectedBook?.ratings_average)}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
              <button className="text-blue-500">Add to favorites</button>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(!showModal)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
