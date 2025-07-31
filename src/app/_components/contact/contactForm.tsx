"use client";

interface Field {
  name: string;
  type: string;
}

interface Props {
  fields: Field[];
}

const ContactForm: React.FC<Props> = ({ fields }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: Record<string, string> = {};
    const formElements = e.currentTarget.elements;

    fields.forEach((field) => {
      const input = formElements.namedItem(field.name) as HTMLInputElement | HTMLTextAreaElement;
      if (input && input.value) {
        formData[field.name] = input.value;
      }
    });

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      alert(result.success ? "✅ Form submitted!" : "❌ Error: " + result.error);
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4 mt-8">
      {fields.map((field, idx) => (
        <div key={idx}>
          <label className="block mb-2 text-left font-medium">
            {field.name}
          </label>
          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              className="w-full p-3 rounded text-black"
              rows={5}
            />
          ) : (
            <input
              name={field.name}
              type={field.type === "Number" ? "tel" : "text"}
              className="w-full p-3 rounded text-black"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="px-6 py-3 bg-gray-200 text-gray-800 rounded hover:bg-blue-100 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
