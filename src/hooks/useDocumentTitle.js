import { useEffect } from "react";

function useDocumentTitle(pageTitle) {
  // set the document title
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}

export default useDocumentTitle;
