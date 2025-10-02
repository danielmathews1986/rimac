import React, { useEffect, useRef, useState } from 'react';
import './carrusel.scss';
import SectionPlanesCA from '../section-planesCA';
import iconsWebGray from '@assets/images/carrusel/atoms-button-circle-icons-web-2.png';
import iconsWebPurple from '@assets/images/carrusel/atoms-button-circle-icons-web-3.png';

type Plan = {
    name: string;
    price: number;
    description: string;
};

const CarouselPer: React.FC = () => {
    const [plans, setPlans] = useState<Plan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch(
                    'https://rimac-front-end-challenge.netlify.app/api/plans.json'
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                setPlans(data.list.slice(-2));

                console.log('data', data)
            } catch (err: any) {
                setError(err.message || 'Error fetching plans');
            } finally {
                setLoading(false);
            }
        };

        fetchPlans();
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % plans.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + plans.length) % plans.length);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) return;

        const deltaX = touchStartX.current - touchEndX.current;

        if (deltaX > 50) {
            nextSlide();
        } else if (deltaX < -50) {
            prevSlide();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    if (loading) return <p>Cargando planes...</p>;


    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!plans || plans.length === 0) {
        return <p>No se encontraron planes.</p>;
    }

    return (
        <div className="carousel">
            <div
                className="carousel__track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {plans.map((plan, index) => (
                    <div className="carousel__slide">
                        <div className="slide-content">
                            <SectionPlanesCA plans={plan}></SectionPlanesCA>
                        </div>
                    </div>
                ))}
            </div>


            <div className="carousel__controls">
                <button onClick={prevSlide}>
                    <img src={iconsWebGray} alt="" width="32px" />
                </button>
                <span>{currentSlide + 1} / {plans.length}</span>
                <button onClick={nextSlide}>
                    <img src={iconsWebPurple} alt="" width="32px" />
                </button>
            </div>
        </div>
    );
};

export default CarouselPer;
