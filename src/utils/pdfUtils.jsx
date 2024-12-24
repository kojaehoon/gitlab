import html2pdf from "html2pdf.js";

/**
 * Converts a given DOM element to a PDF file and downloads it.
 * @param {HTMLElement} element - The DOM element to convert to a PDF.
 * @param {Object} options - Configuration options for the PDF.
 */
export const handlePdfDownload = (element, options = {}) => {
  if (!element) {
    console.error("No valid element provided for PDF generation.");
    return;
  }

  const defaultOptions = {
    filename: "gitlab_tags.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  const pdfOptions = { ...defaultOptions, ...options };

  element.classList.add("pdf-style");
  setTimeout(() => {
    html2pdf()
      .from(element)
      .set(pdfOptions)
      .save()
      .finally(() => {
        element.classList.remove("pdf-style");
      });
  }, 1);
};
