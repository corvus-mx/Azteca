// src/lib/carnets.js

// Base de datos simulada de carnets
export const carnetsDatabase = new Map([
  ['CA-9X7Q-13AM-77SD-42', {
    tipo: 'Investigador OSINT',
    especialidad: 'Análisis de redes sociales',
    emitido: 'Enero 2025',
    vigencia: '2 años',
    estado: 'activo'
  }],
  ['CA-8K4T-11XX-66LL-99', {
    tipo: 'Investigador Digital',
    especialidad: 'Análisis forense de documentos',
    emitido: 'Febrero 2025',
    vigencia: '2 años',
    estado: 'activo'
  }],
  ['CA-2M5P-88QR-44WW-33', {
    tipo: 'Analista de Datos',
    especialidad: 'Correlación de bases de datos públicas',
    emitido: 'Marzo 2025',
    vigencia: '2 años',
    estado: 'activo'
  }],
  ['CA-7N6K-99TT-55YY-11', {
    tipo: 'Especialista en Geolocalización',
    especialidad: 'Verificación de ubicaciones',
    emitido: 'Abril 2025',
    vigencia: '2 años',
    estado: 'activo'
  }],
  ['CA-4L8J-77PP-66MM-88', {
    tipo: 'Verificador de Hechos',
    especialidad: 'Fact-checking y fuentes abiertas',
    emitido: 'Mayo 2025',
    vigencia: '2 años',
    estado: 'activo'
  }]
]);

// Validación de formato
export function isValidHashFormat(hash) {
  const pattern = /^CA-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
  return pattern.test(hash);
}

// Verifica si existe el hash
export function verifyHashExists(hash) {
  const knownHashes = Array.from(carnetsDatabase.keys());
  return knownHashes.includes(hash);
}
