import Navbar from "../_components/navbar/navbar";
import { getPageBySlug } from "@/lib/api";
import FooterSection from "../_components/footer/footer";
import PartnersCarousel from "../_components/partners/partner";
import { Contact } from "@/types/contact";
import ContactForm from "../_components/contact/contactForm"

export default function ContactPage() {
  const contactPage: Contact = getPageBySlug("contact.json");


  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar currentHref="/contact" />
      {contactPage.sections.map((section) => {
        // Office sections
        if (section._block === "officeSection") {
          return (
            <section
              key={section.title}
              className="px-6 md:px-24 py-16 md:py-32 gap-10 bg-gradient-to-b"
            >
              <div className="container mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-14 text-center">
                  {section.title}
                </h2>

                {/* Description block */}
                {section.descriptionBlock?.description && (
                  <div className="mx-auto my-4 px-6 py-4 rounded-lg bg-blue-100 max-w-full md:max-w-2xl lg:max-w-[1000px]">
                    <p className="mb-8 mt-4 text-gray-600 text-center">
                      {section.descriptionBlock.description}
                    </p>
                    <ul className="space-y-2 text-sm mb-6">
                      {section.descriptionBlock.contactList?.map((list) => (
                        <li key={list.text} className="flex gap-2 items-start">
                          <span>{list.emoji}</span>
                          <span className="font-semibold">{list.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Map block */}
                {section.mapBlock?.mapEmbed && (
                  <div className="mx-auto my-4  rounded-lg  max-w-full md:max-w-2xl lg:max-w-[90%]">
                    <iframe
                      className="mx-auto my-4  rounded-lg  max-w-full md:max-w-2xl lg:max-w-[90%]"
                      src={section.mapBlock.mapEmbed}
                      width="1000"
                      height="300"
                      loading="lazy"
                    ></iframe>
                  </div>
                )}

                {/* Images block */}
                {section.imagesBlock && (
                  <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-6 ">
                    {section.imagesBlock.map((image, idx) => (
                      <img
                        key={idx}
                        src={image["office Image"]}
                        alt="office"
                        className="h-60 w-96 object-contain mx-auto rounded-xl"
                      />
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        }

        // Contact form section
        if (section._block === "contact-form") {
          return (
            <section
              key={section.id}
              id={section.id}
              className="py-16 bg-blue-900 text-white"
            >
              <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">{section.headline}</h2>
                <p className="mb-8 text-lg">{section.subheadline}</p>
                {/* <form className="max-w-xl mx-auto grid gap-4 mt-8" onSubmit={handleSubmit}>
                  {section.form?.fields.map((field, idx) => (
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
                </form> */}
                <ContactForm fields={section.form?.fields || []} />
              </div>
            </section>
          );
        }

        return null;
      })}

      <PartnersCarousel />
      <FooterSection />
    </main>
  );
}
