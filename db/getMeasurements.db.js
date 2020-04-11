// import db from './db';
//
// export default async function getMeasurements({
//   limit = 1000, offset = 0, client, clinic,
// } = {}) {
//   if (client != null || clinic != null) {
//     const clientQ = client != null ? `client = UUID_TO_BIN(${db.escape(client)})` : '';
//     const clinicQ = clinic != null ? `clinic = UUID_TO_BIN(${db.escape(clinic)})` : '';
//     const whereClause += `
//     WHERE ${[clientQ, clinicQ].join(' AND ')}
//     `;
//   }
//   const qstr = `
//     SELECT
//       BIN_TO_UUID(id),
//       angle,
//       end_angle as endAngle,
//       joint_type as jointType,
//       measurement_type as measurementType,
//       BIN_TO_UUID(client),
//       BIN_TO_UUID(clinic)
//     FROM Measurement
//     `;
//
//   try {
//     db.pool.promise().query(qstr, [limit, offset]);
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// }
