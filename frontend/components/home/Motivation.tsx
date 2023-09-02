const motivationItems = [
  {
    iconPath: '/icons/icon-online.svg',
    title: 'User-friendly interface',
  },
  {
    iconPath: '/icons/icon-budgeting.svg',
    title: 'Seamless transactions',
  },
  {
    iconPath: '/icons/icon-onboarding.svg',
    title: 'Robust security',
  },
];

export default function Motivation() {
  return (
    <section className="py-14 bg-gradient-radial-gray-to-black lg:py-24">
      <div className="container text-center lg:text-left">
        <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-3">
          {motivationItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center lg:items-start">
              <div className="flex justify-center lg:justify-start">
                <img src={item.iconPath} alt={item.title} className="w-12 h-12 lg:w-16 lg:h-16" />
              </div>
              <h2 className="text-lg text-primary-dark-blue mt-3 lg:text-xl lg:font-bold">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
