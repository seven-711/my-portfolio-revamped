import { createPortal } from "react-dom";
import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return createPortal(
    <div className="fixed inset-0 z-[999] flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm bg-black/50">
      <div
        className="absolute inset-0 w-full h-full"
        onClick={closeModal}
      />
      <motion.div
        className="relative max-w-2xl w-[90%] max-h-[90vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-full top-5 right-5 bg-midnight/80 hover:bg-neutral-700 transition-colors z-20"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-t-2xl" />
        <div className="p-6">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-4 text-neutral-300">{description}</p>
          <div className="space-y-2 mb-6">
            {subDescription.map((subDesc, index) => (
              <p key={index} className="text-sm font-normal text-neutral-400">• {subDesc}</p>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <div key={tag.id} className="p-2 bg-neutral-900 rounded-lg" title={tag.name}>
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              ))}
            </div>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-colors"
              >
                View Project
                <img src="assets/arrow-up.svg" className="w-4 h-4 invert" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};


export default ProjectDetails;
