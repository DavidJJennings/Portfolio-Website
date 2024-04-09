import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const ref = useRef(null);
  const form = useRef<HTMLFormElement>(null);

  const [error, setError] = useState("");
  interface EmailError {
    text: string;
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current === null) {
      setError("Form is not yet initialized, please try resending.");
      return;
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setError("Success");
          form.current?.reset();
        },
        (error: EmailError) => {
          console.log("FAILED...", error.text);
          setError(`Error, please see console for details.`);
        }
      );
  };

  const isInView = useInView(ref, { once: true });
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      id="Contact"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className=" box-border flex flex-col h-screen w-screen snap-center p-12 py-16 justify-start items-center xl:text-xl"
    >
      <motion.h3
        variants={variants}
        className=" font-extrabold text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl mb-4"
      >
        Get In Touch
      </motion.h3>
      {error && error === "Success" ? (
        <div className="w-full flex items-center justify-center">
          <p className=" text-green-400">Success!</p>
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
          <p className=" text-red">{error}</p>
        </div>
      )}
      <form
        onSubmit={(e) => sendEmail(e)}
        ref={form}
        className="flex flex-col gap-y-3 xx-sm:w-[250px] sm:w-[300px] xl:w-[500px]"
        action=""
      >
        <motion.div variants={variants}>
          <label className="block p-1">Name</label>
          <input
            name="name"
            required
            className="w-full text-black rounded-md "
            type="text"
          />
        </motion.div>

        <motion.div variants={variants}>
          <label className="block p-1">Email Address</label>
          <input
            name="email"
            required
            className="w-full text-black rounded-md"
            type="email"
          />
        </motion.div>
        <motion.div variants={variants}>
          <label className="block p-1">Message</label>
          <textarea
            required
            className="text-black rounded-md w-full"
            name="message"
            id=""
            rows={8}
          ></textarea>
        </motion.div>
        <motion.div
          variants={variants}
          className="w-full flex justify-center items-center"
        >
          <input
            className="bg-transparent border-2 w-3/4 rounded-md mt-2 py-2 2xl:py-2 text-sm  font-semibold md:text-[1.075rem] lg:text-xl xl:text-2xl 2xl:text-3xl hover:opacity-50"
            type="submit"
            value="Send"
          />
        </motion.div>
      </form>
    </motion.div>
  );
};
export default Contact;
