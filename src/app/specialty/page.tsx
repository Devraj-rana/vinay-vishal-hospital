import React from 'react';

const services = [
  {
    title: 'Anesthesiology',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Cardiology',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'General Surgery',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Gynecology and Obstetrics',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Nephology',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Oral Dental',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Orthopaedics',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Pediatric',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Physiotherapy',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Pulmonology',
    description: '20+ Doctors are available under this department who serve.',
  },
  {
    title: 'Surgical Gastroenterology',
    description: '20+ Doctors are available under this department who serve.',
  },
];

const Specialty = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-indigo-900 text-sm font-semibold mb-2">OUR SERVICES</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          We Serve In Different <span>Areas</span> <br />
          <span>For Our Patients</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map(({ title, description }, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm mb-4">{description}</p>
              <a href="#" className="text-sm text-gray-700 hover:underline flex items-center space-x-1">
                <span>→ Read more</span>
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-gray-700">
          We have 8+ more Care Service including Emergency Department.{' '}
          <a href="#" className="font-semibold hover:underline">
            View All →
          </a>
        </p>
      </div>
    </section>
  );
};

export default Specialty;
