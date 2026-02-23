const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-6 bg-[#eef1f8]">
      <h1 className="text-xl font-semibold italic">Beautify</h1>

      <ul className="flex gap-8 text-sm font-medium">
        {["Home", "Blog", "Contact Us", "Services"].map((item) => (
          <li key={item} className="cursor-pointer hover:text-blue-600">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;