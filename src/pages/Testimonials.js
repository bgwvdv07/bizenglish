// components/Testimonials.js
export default function Testimonials() {
  const quotes = [
    {
      name: "Carlos, Software Developer",
      quote:
        "I used to freeze during team calls. Now I jump in naturally — like I’ve always been part of the conversation.",
    },
    {
      name: "Sana, UX Designer",
      quote:
        "This program is fun and so practical. Emails, chats, buzzwords — it helped me feel confident quickly.",
    },
    {
      name: "Yuki, Marketing Manager",
      quote:
        "It felt like talking with a friend. I learned more in these 10 weeks than in years of boring lessons.",
    },
  ];

  return (
    <section className="bg-sunny py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-peach font-bold text-center mb-8">
          What learners are saying
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-gray-700"
            >
              <p className="italic mb-4">“{q.quote}”</p>
              <p className="font-semibold text-peach">– {q.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
