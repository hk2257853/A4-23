import * as Yup from 'yup';

const EstimateFareCostSchema = Yup.object().shape({
    source: Yup.string()
        .required('Source location is required'),
    destination: Yup.string()
        .required('Destination location is required'),
});

export default EstimateFareCostSchema;