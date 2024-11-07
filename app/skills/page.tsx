import React from 'react'

export default function Skills() {
  return (
    <>
    <section id="skills" className="bg-gray-100 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12">
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="text-lg font-medium text-gray-700">HTML</h3>
              
            </div>
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="text-lg font-medium text-gray-700">CSS</h3>
              
            </div>
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="text-lg font-medium text-gray-700">Typescript</h3>
              
            </div>
            <div className="bg-white shadow-lg p-6 rounded-xl">
              <h3 className="text-lg font-medium text-gray-700">NextJs</h3>
             
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}