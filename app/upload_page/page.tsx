import DropZone from '../components/DropZone';

const uploadPage = () => {
  return(
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Upload a PDF</h1>
      <DropZone />
    </div>
  );
};


export default uploadPage;