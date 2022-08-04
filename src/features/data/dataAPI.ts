export type StudentData = { Name: string; Classes: Array<string> };
export type InstanceData = { header: string; length: number };
export type DataInstance = { header: string; data: Array<InstanceData> };

export function FetchAPI() {
  var Airtable = require("airtable");
  var base = new Airtable({ apiKey: "keyi8eQk18PGlUrRv" }).base(
    "app8ZbcPx7dkpOnP0"
  );

  return new Promise(
    async (resolve: (result: Array<DataInstance>) => void, reject) => {

      const studentsTable = base("Students");
      const ClassesTable = base("Classes");

      studentsTable.select({ view: "Grid view" }).eachPage(
        function page(records: any[], fetchNextPage: any) {
          console.log("all data", records)
        },
        function done(err: any) {
          if (err) {
            reject(err);
          }
        }
      );
        const allRecords = async () => {
          const records = await studentsTable.select({ filterByFormula: `IF({Name} = 'Sid', {Classes})`}).all();
          const fields = records[0].fields;
        return fields; 
      }
      resolve(await allRecords());
      const ClassesForSearchStudentArray: any = await allRecords()

      const ClassesForSearchStudent = ClassesForSearchStudentArray.Classes.map((item: any) => { 
        ClassesTable.find(item, function (err: any, record: any) {
          if (err) {
            console.error(err);
            return;
          }
          console.log("Retrieved", record.id);
          const result: Array<DataInstance> = record.fields;
        });

       })
      
     
      console.log("ClassesForSearchStudent", ClassesForSearchStudent)


      
    }
  );
}
