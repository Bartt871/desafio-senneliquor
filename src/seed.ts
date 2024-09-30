import ConnectToDatabase from "./Database/ConnectToDatabase";
import DoctorEntity from "./Entity/DoctorEntity";
import bcrypt from 'bcrypt';
import HospitalEntity from "./Entity/HospitalEntity";
import TaskEntity from "./Entity/TaskEntity";

const startSeeder = async () => {
    try {
        await ConnectToDatabase();

        const doctorOne = await new DoctorEntity({
            name: 'Médico 1',
            username: 'medico1',
            password: await bcrypt.hash('12345678', 10)
        }).save();

        const doctorTwo = await new DoctorEntity({
            name: 'Médico 2',
            username: 'medico2',
            password: await bcrypt.hash('12345678', 10)
        }).save();

        const doctorThree = await new DoctorEntity({
            name: 'Médico 3',
            username: 'medico3',
            password: await bcrypt.hash('12345678', 10)
        }).save();

        const hospitalOne = await new HospitalEntity({
            name: 'HOSPITAL 1',
            latitude: -22.9037912,
            longitude: -47.06816936,
        }).save();


        const hospitalTwo = await new HospitalEntity({
            name: 'HOSPITAL 2',
            latitude: -22.8943904,
            longitude: -47.06938827,
        }).save();


        const hospitalThree = await new HospitalEntity({
            name: 'HOSPITAL 3',
            latitude: -22.9176917,
            longitude: -47.0594874,
        }).save();


        const hospitalFour = await new HospitalEntity({
            name: 'HOSPITAL 4',
            latitude: -22.9084372,
            longitude: -47.05499263,
        }).save();


        const hospitalFive = await new HospitalEntity({
            name: 'HOSPITAL 5',
            latitude: -22.8408133,
            longitude: -47.05186743,
        }).save();


        const hospitalSix = await new HospitalEntity({
            name: 'HOSPITAL 6',
            latitude: -22.9002002,
            longitude: -47.05476596,
        }).save();


        const hospitalSeven = await new HospitalEntity({
            name: 'HOSPITAL 7',
            latitude: -22.9042279,
            longitude: -47.06220784,
        }).save();


        const hospitalEight = await new HospitalEntity({
            name: 'HOSPITAL 8',
            latitude: -22.8088459,
            longitude: -47.06530754,
        }).save();


        const hospitalNine = await new HospitalEntity({
            name: 'HOSPITAL 9',
            latitude: -22.8925509,
            longitude: -47.06406772,
        }).save();


        const hospitalTen = await new HospitalEntity({
            name: 'HOSPITAL 10',
            latitude: -22.9010922,
            longitude: -47.05554787,
        }).save();

        await new TaskEntity({
            hospital_id: hospitalSeven._id,
            care_category: 1,
            patient_name: 'PACIENTE 267',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();

        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 340',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 115',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 1,
            patient_name: 'PACIENTE 173',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 349',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 415',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 432',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFive._id,
            care_category: 2,
            patient_name: 'PACIENTE 203',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 366',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 120',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 1,
            patient_name: 'PACIENTE 306',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSeven._id,
            care_category: 2,
            patient_name: 'PACIENTE 252',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 1,
            patient_name: 'PACIENTE 429',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalNine._id,
            care_category: 1,
            patient_name: 'PACIENTE 473',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalOne._id,
            care_category: 2,
            patient_name: 'PACIENTE 29',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSeven._id,
            care_category: 2,
            patient_name: 'PACIENTE 259',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSeven._id,
            care_category: 1,
            patient_name: 'PACIENTE 265',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 278',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalOne._id,
            care_category: 2,
            patient_name: 'PACIENTE 3',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalNine._id,
            care_category: 1,
            patient_name: 'PACIENTE 474',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 275',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalTen._id,
            care_category: 2,
            patient_name: 'PACIENTE 501',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSix._id,
            care_category: 2,
            patient_name: 'PACIENTE 218',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 139',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 121',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalThree._id,
            care_category: 2,
            patient_name: 'PACIENTE 97',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 1,
            patient_name: 'PACIENTE 122',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalTwo._id,
            care_category: 2,
            patient_name: 'PACIENTE 62',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalOne._id,
            care_category: 2,
            patient_name: 'PACIENTE 1',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalThree._id,
            care_category: 2,
            patient_name: 'PACIENTE 92',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorOne._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalNine._id,
            care_category: 2,
            patient_name: 'PACIENTE 497',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 170',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 394',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSix._id,
            care_category: 2,
            patient_name: 'PACIENTE 222',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalOne._id,
            care_category: 2,
            patient_name: 'PACIENTE 28',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 178',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 150',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalOne._id,
            care_category: 1,
            patient_name: 'PACIENTE 33',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFive._id,
            care_category: 1,
            patient_name: 'PACIENTE 212',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalNine._id,
            care_category: 2,
            patient_name: 'PACIENTE 500',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalTwo._id,
            care_category: 2,
            patient_name: 'PACIENTE 66',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 1,
            patient_name: 'PACIENTE 388',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalOne._id,
            care_category: 1,
            patient_name: 'PACIENTE 32',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalThree._id,
            care_category: 2,
            patient_name: 'PACIENTE 102',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 439',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalNine._id,
            care_category: 2,
            patient_name: 'PACIENTE 492',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 318',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSix._id,
            care_category: 2,
            patient_name: 'PACIENTE 224',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalThree._id,
            care_category: 2,
            patient_name: 'PACIENTE 98',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 1,
            patient_name: 'PACIENTE 119',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 144',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 344',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalTwo._id,
            care_category: 2,
            patient_name: 'PACIENTE 70',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 200',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 286',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 319',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalNine._id,
            care_category: 1,
            patient_name: 'PACIENTE 475',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalThree._id,
            care_category: 2,
            patient_name: 'PACIENTE 86',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalNine._id,
            care_category: 2,
            patient_name: 'PACIENTE 470',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 282',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 1,
            patient_name: 'PACIENTE 152',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalNine._id,
            care_category: 1,
            patient_name: 'PACIENTE 495',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 1,
            patient_name: 'PACIENTE 202',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 1,
            patient_name: 'PACIENTE 431',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 124',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 323',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSeven._id,
            care_category: 1,
            patient_name: 'PACIENTE 256',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 292',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorTwo._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 175',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSix._id,
            care_category: 2,
            patient_name: 'PACIENTE 227',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 1,
            patient_name: 'PACIENTE 401',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalOne._id,
            care_category: 2,
            patient_name: 'PACIENTE 52',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 118',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalOne._id,
            care_category: 2,
            patient_name: 'PACIENTE 46',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 337',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 1,
            patient_name: 'PACIENTE 365',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 134',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 295',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSix._id,
            care_category: 1,
            patient_name: 'PACIENTE 226',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 291',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 322',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 382',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 301',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 153',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalThree._id,
            care_category: 2,
            patient_name: 'PACIENTE 99',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSeven._id,
            care_category: 2,
            patient_name: 'PACIENTE 269',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSeven._id,
            care_category: 2,
            patient_name: 'PACIENTE 258',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 271',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 1,
            patient_name: 'PACIENTE 117',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalNine._id,
            care_category: 1,
            patient_name: 'PACIENTE 477',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalThree._id,
            care_category: 2,
            patient_name: 'PACIENTE 103',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalNine._id,
            care_category: 2,
            patient_name: 'PACIENTE 479',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSeven._id,
            care_category: 1,
            patient_name: 'PACIENTE 233',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSeven._id,
            care_category: 1,
            patient_name: 'PACIENTE 235',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalFour._id,
            care_category: 2,
            patient_name: 'PACIENTE 162',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 369',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalOne._id,
            care_category: 1,
            patient_name: 'PACIENTE 7',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalThree._id,
            care_category: 2,
            patient_name: 'PACIENTE 106',
            patient_biological_gender: 'M',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalSeven._id,
            care_category: 1,
            patient_name: 'PACIENTE 242',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();


        await new TaskEntity({
            hospital_id: hospitalEight._id,
            care_category: 2,
            patient_name: 'PACIENTE 433',
            patient_biological_gender: 'F',
            status: 'A',
            doctor_id: doctorThree._id
        }).save();
    } catch (error) {
        console.error('Erro ao rodar as seeds:', error);
    }

    process.exit();
};

startSeeder();