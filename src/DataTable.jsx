import React from 'react';
import DataTable from 'react-data-table-component';

const DataTables = ({type}) => {
  // Poster data
  const posters = [
    { number: 1, title: "ROBOTIC IN SURGERY AND REHABILITATION", name: "NURAIN IDAYU BINTI YAHAYA" },
    { number: 2, title: "TISSUE ENGINEERING: Scaffold Based on Composite Bombyx mori Silk Fibroin-Carrageenan as Coronary Artery Vessel with Casting Method", name: "Sahri Tarigan" },
    { number: 3, title: "Gene Therapy For Liver Cancer: Combining HIF-1a shRNA and AAV3 Vector Approaches", name: "Elya Scholastica Welltor" },
    { number: 4, title: "PHYSIOLOGICAL THERAPHY VIRTUAL REALITY FOR MEDICAL TRAINING AND THERAPY", name: "Evelyn Leong Yee Ying" },
    { number: 5, title: "TEL-MEDIC Telemedicine For Sustainable", name: "Frankin Solano Sinaga" },
    { number: 6, title: "MEDICATION ADHERENCE IN TYPE 2 DIABETES MELLITUS (T2DM) PATIENTS IN INDONESIA: TELEMEDICINE VS. IN-PERSON VISIT", name: "Ghefira Putri Athaya Fairuz" },
    { number: 7, title: "SMART POSTUREGUARD REVOLUTIONARY GYROSCOPE-INTEGRATED NECKBAND FOR REAL-TIME-NECK ANGLE DETECTION AND CERVICALGIA", name: "Ivan Fulvian Pitoyo" },
    { number: 8, title: "TELEMEDICINE ORTHOPEDICS POST-SURGERY FOLLOW UP", name: "NUR SYAFIQATUNNISSA BINTI SAPIEE" },
    { number: 9, title: "THE EFFECT OF GRASP STYLES TO MUSCLE ACTIVITY AND HANDWRITING QUALITY", name: "Rahaf Ayasso" },
    { number: 10, title: "Magnesium Composite Based on Bio-Fibers for Wound Dressing Applications that Can Absorb Fluids and Prevent Infection", name: "Saif Khan Nazirun" },
    { number: 11, title: "DEVELOPMENT OF A BLOOD WARMER WITH BIOFEEDBACK AND MONITORING SYSTEM", name: "Shamvarthini Mahenthran" },
    { number: 12, title: "PORTABLE ECG MONITORING DEVICE INTEGRATED WITH THINGSBOARD IOT PLATFORM", name: "Rebecca Beatrix Fan Gultom" },
    { number: 13, title: "Empowering Indonesia's Healthcare through Technology Medicine, The EDGE SP1000 Robotic System for Advanced taTME Laparoscopic Surgery", name: "Moch. Samy Fislam" },
    { number: 14, title: "DREAM (Dynamic Relaxing Eye Mask with Advanced Massage)", name: "Mela Ananda" },
    { number: 15, title: "CRISPR (CLUSTERED REGULARLY INTERSPACED SHORT PALINDROMIC REPEATS)", name: "Veronika Br Siregar" },
    { number: 16, title: "GENE THERAPY", name: "SATHISKUMAR A/L THIAGOO" },
    { number: 17, title: "SHAPING TECHNOLOGY FOR FUTURE HEALTHCARE: THE ROLE OF TELEMEDICINE", name: "NUR IZZATI HUSNA BINTI HUSSAINI" },
    { number: 18, title: "LI-DO: INNOVATION OF TRANSFERIN LIGAND LIPOSOMES IN THE CONTROLLED RELEASE OF DOXORUBICIN DRUG FOR COLORECTAL CANCER TREATMENT", name: "Nada Nadzira Ayasha Kamal" },
    { number: 19, title: "HYBRID ELECTROSPINNING AND 3D BIOPRINTING: INNOVATIVE SCAFFOLDS FOR ADVANCED SKIN TISSUE ENGINEERING APPLICATIONS", name: "Muhamad Umar Fityan Irkham" },
    { number: 20, title: "TELEMEDICINE FOR FUTURE HEALTH", name: "Destyana Ratih Risma Widya" }
  ];

  const essays = [
    { number: 1, title: "Deploying AI and Robotic in Medicine", name: "Husni Rosidah" },
    { number: 2, title: "Database Integration Solution for Optimizing Telemedicine and Pharmacy Collaboration", name: "Novi Centia Wangi" },
    { number: 3, title: "Sambiloto Patch as an Innovative First Aid Solution Immune strengthening for Rabies Bite infection Addressing Health Service Access Challenges in Rural Areas", name: "Romayani Sihombing" },
    { number: 4, title: "Telemedicine in Veterinary Practices: An Alternative Approach to Managing Zoonotic Diseases", name: "Ch'ng Xin Fen" },
    { number: 5, title: "The Role of AI and Robotics in Medical Decision Making", name: "Muhammad Ilham" },
    { number: 6, title: "Gene Therapy: Good News for Rare Diseases in Asia", name: "M AFDOL GANI HARVA" },
    { number: 7, title: "Breaking the Monopoly: Bridging the Prosthetics Gap in War-Torn and Developing Regions", name: "Muhammad Sayem Hossen" },
    { number: 8, title: "Innovation without limits: Implementation of Artificial Intelligence and Robotics technology in Global Medical Transformation", name: "Christofer Stefanus Bayu Pangaribuan" },
    { number: 9, title: "Healthcare navigation: Why Stopping People from Getting Lost in Hospital is Essential?", name: "TEOH MING CHI" },
    { number: 10, title: "AI in Telemedicine: A Solution for Healthcare Access in Rural Areas?", name: "CHENG JIA YI" },
    { number: 11, title: "AI and Robotics: Technological Innovations for Enhancing Medical Precision", name: "Stevani Nadya Lombu" },
    { number: 12, title: "INDUNG: AN APPLICATION FOR IMPROVING THE MENTAL WELL-BEING OF HOUSEWIVES BASED ON ECVT BRAIN SCAN ANALYSIS", name: "Talita Sri Indrayuni" },
    { number: 13, title: "Advancements in Biomaterials Engineering: Bridging Science, Biology, and Medicine", name: "Wirda Azavira" },
    { number: 14, title: "APPLICATION OF BODY TEMPERATURE AND BLOOD SUGAR CHECKING FEATURES IN PROSTHETIC HANDS", name: "Akhmad Rasyid Alfarabi" },
    { number: 15, title: "Transforming Mental Health Care through Telemedicine in the Era of Society 5.0: Paving the Way to a Golden Indonesia 2045", name: "Muhammad Fhadli" },
    { number: 16, title: "SMART POSTUREGUARD: REVOLUTIONARY GYROSCOPE-INTEGRATED NECKBAND FOR REAL-TIME NECK ANGLE DETECTION AND CERVICALGIA", name: "Ivan Fulvian Pitoyo" },
    { number: 17, title: "Exploring the Market Potential of Flyfish Albumin: Leveraging Biotechnology for Sustainable and Innovative Applications in Health and Industry", name: "Berkat Don Damero Siadari" },
  ]
  // Define columns for the table
  const columns = [
    {
      name: 'Number',
      selector: row => row.number,
      sortable: true,
      width:'140px',
      
    },
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
      wrap: true,  // This will allow long text to wrap within the cell
      width:"500px"
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
      width:"300px"
    },
  ];
  const customStyles = {
    headCells: {
      style: {
        fontSize: '16px',  // Adjust the font size for the header
        fontWeight: 'bold',
      },
    },
    cells: {
      style: {
        fontSize: '14px',  // Adjust the font size for the table body cells
      },
    },
  };

  return (
    <div>
      <DataTable
        columns={columns}
        data={type=="poster"?posters:essays}
          // Enables pagination
        highlightOnHover  // Highlights the row on hover
        striped  // Adds stripes to rows
        defaultSortField="number"  // Sort by 'number' column by default
        className='border-2'
        customStyles={customStyles} 
      />
    </div>
  );
};

export default DataTables;
