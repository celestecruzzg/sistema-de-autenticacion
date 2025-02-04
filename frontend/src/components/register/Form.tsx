import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import { useState } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

export default function Form() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [favoritePet, setFavoritePet] = useState("");  // Estado para la mascota favorita

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const payload = {
                name,
                last_name: lastName,
                email,
                password,
                security_answer: favoritePet,  // Incluimos la mascota favorita como security_answer
            };

            const response = await axios.post("http://127.0.0.1:8000/auth/register", payload);

            toast.success("Usuario registrado con éxito!");
            console.log(response.data);

            setName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setFavoritePet("");  // Limpiamos el campo de mascota favorita
        } catch (error: any) {
            console.error(error.response?.data?.detail || "Error desconocido");
            toast.error(error.response?.data?.detail || "Error al registrar usuario");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl w-full max-w-xl flex flex-col h-full md:h-auto">
            <section className="flex">
                <div className="relative w-full flex flex-col justify-center px-14 py-8">
                    <div className="absolute inset-0 bg-cover bg-center" />
                    <div className="relative z-10 p-5 rounded-lg">
                        <h1 className="text-center text-3xl font-semibold mt-7 mb-2 text-[var(--text-black)]">
                            ¡Crea una cuenta!
                        </h1>
                        <h6 className="text-center font-light text-sm mb-7 text-gray-500">
                            Ingresa tus datos y una contraseña
                        </h6>

                        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
                            <div className="relative w-full max-w-xs">
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="Nombre(s)"
                                    className="mt-1 block w-full pl-10 border border-gray-300 placeholder:font-light text-sm rounded-lg shadow-sm p-2"
                                />
                                <FaRegAddressCard className="absolute left-3 top-3 text-[var(--primary-color)] h-5 w-5" />
                            </div>
                            <div className="relative w-full max-w-xs">
                                <input
                                    type="text"
                                    name="last-name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                    placeholder="Apellidos"
                                    className="mt-1 block w-full pl-10 border border-gray-300 placeholder:font-light text-sm rounded-lg shadow-sm p-2"
                                />
                                <FaRegAddressCard className="absolute left-3 top-3 text-[var(--primary-color)] h-5 w-5" />
                            </div>
                            <div className="relative w-full max-w-xs">
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Correo electrónico"
                                    className="mt-1 block w-full pl-10 border border-gray-300 placeholder:font-light text-sm rounded-lg shadow-sm p-2"
                                />
                                <FiMail className="absolute left-3 top-3 text-[var(--primary-color)] h-5 w-5" />
                            </div>
                            <div className="relative w-full max-w-xs">
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    value={password}
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Contraseña"
                                    className="mt-1 block w-full pl-10 border border-gray-300 placeholder:font-light text-sm rounded-lg shadow-sm p-2"
                                />
                                <FiLock className="absolute left-3 top-3 text-[var(--primary-color)] h-5 w-5" />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                    {isPasswordVisible ? (
                                        <FiEyeOff onClick={togglePasswordVisibility} className="text-gray-400 h-5 w-5" />
                                    ) : (
                                        <FiEye onClick={togglePasswordVisibility} className="text-gray-400 h-5 w-5" />
                                    )}
                                </div>
                            </div>
                            <div className="relative w-full max-w-xs">
                                <input
                                    type="text"
                                    name="favorite-pet"
                                    value={favoritePet}
                                    onChange={(e) => setFavoritePet(e.target.value)}
                                    required
                                    placeholder="¿Cuál es tu animal favorito?"
                                    className="mt-1 block w-full pl-10 border border-gray-300 placeholder:font-light text-sm rounded-lg shadow-sm p-2"
                                />
                                <FaRegAddressCard className="absolute left-3 top-3 text-[var(--primary-color)] h-5 w-5" />
                            </div>
                            <div className="flex flex-col justify-end items-center mt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-64 py-1.5 px-2 rounded-md text-white font-regular cursor-pointer mt-2 mb-4 ${
                                        isLoading
                                            ? "bg-[var(--color-gray)] cursor-not-allowed"
                                            : "bg-[var(--color-gray)] hover:bg-[var(--color-gray-darker)]"
                                    }`}
                                >
                                    {isLoading ? (
                                        <svg className="animate-spin h-5 w-5 mx-auto text-white" viewBox="0 0 24 24">
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                            ></path>
                                        </svg>
                                    ) : (
                                        "Registrarse"
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
