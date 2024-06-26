export const NumberForm = ({ number, setNumber, handleSubmit, handleRemove }) => (
  <form className="w-full flex h-11" onSubmit={(e) => e.preventDefault()}>
    <input
      type="number"
      value={number}
      placeholder="Digite um número"
      onChange={(e) => setNumber(e.target.value)}
      className="w-5/6 border-2 text-black border-gray-800 rounded-lg p-2 outline-none mr-2"
    />
    <button 
      type="button"
      onClick={handleSubmit}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"  
    >Adicionar</button>
    <button 
      type="button"
      onClick={handleRemove}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"  
    >Remover</button>
  </form>
);