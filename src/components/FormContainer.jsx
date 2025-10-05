import TitleForm from "./TitleForm"
import FormField from "./FormField"


const FormContainer = ({title, fields, onsubmit, submitlabel = 'Enviar', loading = false}) => {
  return (
    <div className="flex flex-col items-center justify-center
    py-12 sm:px-6 lg:px">
    <TitleForm title={title} />
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-8'>
                <form onSubmit={onsubmit} className='space-y-6'>
                {fields.map((field) => (
                    <FormField key={field.name}  {...field} />
                ))}
                <button type="submit" disabled={loading} className={`w-full justify-center border
                    rounded-md ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'} py-2
                    px-4 text-sm font-medium text-white`}>
                    {loading ? "Cargando..." : submitlabel}
                </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FormContainer