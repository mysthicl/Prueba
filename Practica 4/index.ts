enum nivelAcademico{
    Primaria = "Primaria",
    Secundaria = "Secundaria",
    Universidad = "Universidad"
}

type alumno = {
    nombre: string,
    edad: number,
    nivelAcademico: nivelAcademico
}

let alumno1: alumno = {nombre: "Juan", edad: 15, nivelAcademico: nivelAcademico.Primaria}
let alumno2: alumno = {nombre: "Maria", edad: 20, nivelAcademico: nivelAcademico.Universidad} 
console.log(alumno1);
console.log(alumno2);