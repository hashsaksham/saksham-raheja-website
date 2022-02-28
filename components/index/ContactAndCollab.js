import React from "react";
import ContactForm from "./ContactaAndCollab/ContactForm";
import Sides from "./ContactaAndCollab/Sides";

const ContactAndCollab = () => {
  return (
    <div className="flex flex-row tabletbelow:flex-col desktopup:min-h-[calc(100vh-5rem)] bg-chaand p-5">
      <Sides
        data={{
          heading: <> Contact Me </>,
          para: (
            <>
              Wanna{" "}
              <span className="keyword-under"> discuss a new project</span>?
              Let&apos;s Talk! You can without any hesitation reach out to me
              for any <span className="keyword-under">Questions</span> or if you
              want to just <span className="keyword-under">Chill & Chat</span>.
            </>
          ),
          content: (
            <>
              <ContactForm />
            </>
          ),
        }}
      />
      <div className="[flex-basis:4px] tabletbelow:mb-4  bg-aaftab rounded-full"></div>
      <Sides
        data={{
          heading: "Collaborate",
          para: (
            <>
              I am open to collaborate on any{" "}
              <span className="keyword-under">project</span> which interests me.
              I am also open to participate in any{" "}
              <span className="keyword-under">hackathon</span>,{" "}
              <span className="keyword-under">competition</span>,{" "}
              <span className="keyword-under">jam session</span> or{" "}
              <span className="keyword-under">meetup</span>.
            </>
          ),
          content: <></>,
        }}
      />
    </div>
  );
};

export default ContactAndCollab;
