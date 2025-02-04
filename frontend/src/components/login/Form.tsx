import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
    email: string;
    password: string;
    security_answer: string; // Campo de respuesta de seguridad
};

export default function Form() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setIsLoading(true);

        try {
            const response = await axios.post("http://127.0.0.1:8000/auth/login", {
                email: data.email,
                password: data.password,
                security_answer: data.security_answer, // Se incluye la respuesta de seguridad en el POST
            });

            // Guardar el token de acceso, usuario y rol en localStorage
            localStorage.setItem("accessToken", response.data.access_token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("userRole", response.data.user.role); // Guardamos el rol

            // Redirigir según el rol
            if (response.data.user.role === "admin") {
                navigate("/dashboard");
            } else if (response.data.user.role === "employee") {
                navigate("/inicio"); // Ruta para empleados
            }

        } catch (error) {
            toast.error("Error al iniciar sesión, inténtalo de nuevo", {
                style: {
                    background: "#f44336",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "10px",
                },
            });
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
                            ¡Bienvenido de nuevo!
                        </h1>
                        <h6 className="text-center font-light text-sm mb-7 text-gray-500">
                            Ingresa tu correo, contraseña y respuesta de seguridad
                        </h6>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col items-center">
                            <div className="relative w-full max-w-xs">
                                <input
                                    type="email"
                                    placeholder="Correo electrónico"
                                    className="mt-1 block w-full pl-10 border border-gray-300 placeholder:font-light text-sm rounded-lg shadow-sm p-2"
                                    {...register("email", {
                                        required: "El correo electrónico es requerido",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Por favor, ingresa un correo electrónico válido",
                                        },
                                    })}
                                />
                                <FiMail className="absolute left-3 top-3 text-[var(--primary-color)] h-5 w-5" />
                                {errors.email && (
                                    <span className="text-red-500 text-sm mt-1">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                            <div className="relative w-full max-w-xs">
                                <input
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    placeholder="Contraseña"
                                    className="mt-1 block w-full pl-10 border border-gray-300 placeholder:font-light text-sm rounded-lg shadow-sm p-2"
                                    {...register("password", {
                                        required: "La contraseña es requerida",
                                    })}
                                />
                                <FiLock className="absolute left-3 top-3 text-[var(--primary-color)] h-5 w-5" />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                    {isPasswordVisible ? (
                                        <FiEyeOff onClick={togglePasswordVisibility} className="text-gray-400 h-5 w-5" />
                                    ) : (
                                        <FiEye onClick={togglePasswordVisibility} className="text-gray-400 h-5 w-5" />
                                    )}
                                </div>
                                {errors.password && (
                                    <span className="text-red-500 text-sm mt-1">
                                        {errors.password.message}
                                    </span>
                                )}
                            </div>
                            <div className="relative w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder="Respuesta de seguridad (ej. ¿Cuál es tu animal favorito?)"
                                    className="mt-1 block w-full pl-10 border border-gray-300 placeholder:font-light text-sm rounded-lg shadow-sm p-2"
                                    {...register("security_answer", {
                                        required: "La respuesta de seguridad es requerida",
                                    })}
                                />
                                {errors.security_answer && (
                                    <span className="text-red-500 text-sm mt-1">
                                        {errors.security_answer.message}
                                    </span>
                                )}
                            </div>
                            <div className="relative w-full max-w-xs flex justify-end">
                                <a href="/forget_pass" className="text-blue-800 text-sm mb-5 underline">¿Olvidaste tu contraseña?</a>
                            </div>
                            <div className="flex flex-col justify-end items-center mt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-64 py-1.5 px-2 rounded-md text-white font-regular cursor-pointer mt-2 mb-4 ${isLoading ? "bg-[var(--color-gray)] cursor-not-allowed" : "bg-[var(--color-gray)] hover:bg-[var(--color-gray-darker)]"}`}
                                >
                                    {isLoading ? (
                                        <svg className="animate-spin h-5 w-5 mx-auto text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                        </svg>
                                    ) : (
                                        "Iniciar sesión"
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
