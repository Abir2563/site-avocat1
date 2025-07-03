import React, { useEffect, useState } from 'react';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios'; // Pour les requêtes API

function Home() {
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [clientCount, setClientCount] = useState(0); // Nouvel état pour le comptage des clients

  // Récupération du nombre de produits
  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await axios.get('https://avocat-backend.onrender.com/api/appointments/');
        setProductCount(response.data.count);
      } catch (err) {
        console.error('Erreur lors de la récupération du nombre de produits:', err);
      }
    };

    fetchProductCount();
  }, []); // Exécution une seule fois au montage

  // Récupération du nombre de commandes
  useEffect(() => {
    const fetchOrderCount = async () => {
      try {
        const response = await axios.get('https://avocat-backend.onrender.com/auth/commandes/count');
        setOrderCount(response.data.count);
      } catch (err) {
        console.error('Erreur lors de la récupération du nombre de commandes:', err);
      }
    };

    fetchOrderCount();
  }, []); // Exécution une seule fois au montage

  // Récupération du nombre de clients
  useEffect(() => {
    const fetchClientCount = async () => {
      try {
        const response = await axios.get('https://avocat-backend.onrender.com/auth/client/count');
        setClientCount(response.data.count); // Assurez-vous que la réponse renvoie "count"
      } catch (err) {
        console.error('Erreur lors de la récupération du nombre de clients:', err);
      }
    };

    fetchClientCount();
  }, []); // Exécution une seule fois au montage

  const data = [
    {
      name:'Janvier',
      QP: 120,
      QV: 80,
      amt: 2400,
    },
    {
      name: 'Février',
      QP: 100,
     QV: 90,
      amt: 2400,
    },
    {
      name: 'Mars',
      QP: 150,
      QV: 120,
      amt: 2210,
    },
    {
      name: 'Avril ',
      QP: 200,
     QV:180,
      amt: 2290,
    },
    {
      name: 'Mai',
      QP: 100,
      QV: 130,
      amt: 2000,
    },
    {
      name: ' Juin ',
     QP: 160,
      QV: 150,
      amt: 2181,
    },
    {
      name: 'Juillet ',
      QP: 100,
      QV: 100,
      amt: 2500,
    },
    {
      name: 'Aout',
      QP: 160,
      QV: 90,
      amt: 2100,
    },
    
  ];

  return (
   <main className='main-container'>
    <div className='main-container'>
      <div className='main-title'>
        <h3>Dashboard 2024</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>Appointments</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>{productCount}</h1> {/* Affiche le nombre de produits */}
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>Consultations</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>{orderCount}</h1> {/* Affiche le nombre de commandes */}
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>Clients</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{clientCount}</h1> {/* Affiche le nombre de clients */}
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h3>MESSAGES</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>10</h1> {/* Affiche le nombre de messages */}
        </div>
      </div>

      <div className='charts'>
        <>
<ResponsiveContainer width="100%" height="100%">
<BarChart
  width={500}
  height={300}
  data={data}
  margin={{
    top: 20,
    right: 30,
    left: 20,
    bottom: 5,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="QP" stackId="a" fill="#000000" />
  
</BarChart>
</ResponsiveContainer></>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={800}
            height={400}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                
                <Bar dataKey="QV" fill="#00000" />
                </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
    </main>
  );
}

export default Home;
