import DropZone from '../components/DropZone';

const uploadPage = () => {
  return(
    <div className="flex flex-col items-center justify-center h-screen pt-6">
      <h1 className="text-3xl font-bold mb-2">Upload a PDF</h1>
      <DropZone />
    </div>
  );
};


export default uploadPage;