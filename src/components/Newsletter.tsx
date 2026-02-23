import { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <section className="px-12 py-16 bg-white text-center">
      <h3 className="text-2xl font-semibold mb-6">Stay Updated</h3>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center gap-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          className="border px-4 py-3 w-72 rounded-md"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 rounded-md"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;