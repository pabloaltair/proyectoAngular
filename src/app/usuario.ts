export interface Usuario {
    /** Identificador único del usuario. */
    idUsuario: number;
    
    /** Nombre único del usuario. */
    nombreUsuario?: string;
    
    /** Número de teléfono del usuario. */
    telefonoUsuario?: string;
    
    /** Email de contacto del usuario. */
    emailUsuario: string;
    
    /** Contraseña para autenticación del usuario. */
    passwordUsuario: string;
    
    /** Rol del usuario (por ejemplo, ADMIN, USER). */
    rol:string;
}
