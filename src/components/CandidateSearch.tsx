'use client';

import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/config/firebase';
import Button from './ui/Button';
import SpinnerComp from './ui/SpinnerComp';

interface Candidate {
    id: string;
    location: string;
    jobRole: string;
    skills: string[];
    company: string;
    applyUrl?: string;
    stipend?: string;
}

interface FormValues {
    location?: string;
    jobRole?: string;
}

const validationSchema = Yup.object().shape({
    location: Yup.string(),
    jobRole: Yup.string(),
});

const CandidateSearch: React.FC = () => {
    const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([]);
    const [candidatesData, setCandidatesData] = useState<Candidate[]>([]);
    const [loading, setLoading] = useState(true);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(validationSchema),
    });

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'internship'), (snapshot) => {
            const candidates: Candidate[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...(doc.data() as Omit<Candidate, 'id'>),
            }));
            setCandidatesData(candidates);
            setFilteredCandidates(candidates);
            setLoading(false);
        }, (error) => {
            console.error('Error fetching candidates: ', error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const onSubmit: SubmitHandler<FormValues> = (values) => {
        const { location, jobRole } = values;

        const filteredCandidates = candidatesData.filter(
            (candidate: Candidate) =>
                (location ? candidate.location.toLowerCase() === location.toLowerCase() : true) &&
                (jobRole ? candidate.jobRole.toLowerCase() === jobRole.toLowerCase() : true)
        );

        setFilteredCandidates(filteredCandidates);
    };

    const handleReset = () => {
        reset();
        setFilteredCandidates(candidatesData);
    };

    if (loading) {
        return (
            <SpinnerComp />
        );
    }

    return (
        <div className="p-6 max-w-4xl mx-auto w-full min-h-screen flex flex-col rounded-lg shadow-md">
            <div className="min-w-[60%] mt-28">
                <h1 className="text-3xl text-blue-500 mb-5 font-bold text-center uppercase">Search</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col items-center">
                    <div className='w-full'>
                        <label htmlFor="location" className="block mb-1 font-semibold text-customGray">Location</label>
                        <select
                            id="location"
                            {...register('location')}
                            className="w-full p-3 border bg-slate-950 bg-gradient-to-br from-slate-700 text-customGray backdrop-blur-3xl border-none outline-none rounded"
                        >
                            <option value="">Select location</option>
                            {Array.from(new Set(candidatesData.map((candidate: Candidate) => candidate.location))).map((location) => (
                                <option key={location} value={location}>
                                    {location}
                                </option>
                            ))}
                        </select>
                        {errors.location && <p className="text-red-500">{errors.location.message}</p>}
                    </div>
                    <div className='w-full'>
                        <label htmlFor="jobRole" className="block font-semibold ml-1 text-customGray mb-1">Job Role</label>
                        <select
                            id="jobRole"
                            {...register('jobRole')}
                            className="w-full p-3 border bg-slate-950 bg-gradient-to-br from-slate-700 text-customGray backdrop-blur-3xl border-none outline-none mb-4 rounded "
                        >
                            <option value="">Select job role</option>
                            {Array.from(new Set(candidatesData.map((candidate: Candidate) => candidate.jobRole))).map((jobRole) => (
                                <option key={jobRole} value={jobRole}>
                                    {jobRole}
                                </option>
                            ))}
                        </select>
                        {errors.jobRole && <p className="text-red-500">{errors.jobRole.message}</p>}
                    </div>
                    <div className="flex flex-col w-full space-y-2">
                        <Button type="submit" className="px-7">Search</Button>
                        <Button type="button" className="px-7" onClick={handleReset}>Reset</Button>
                    </div>
                </form>
            </div>

            {filteredCandidates.length > 0 && (
                <div className="mt-14">
                    <h2 className="text-3xl text-blue-500 mb-9 font-bold text-center uppercase">Opportunities</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                        {filteredCandidates.map((candidate) => (
                            <li key={candidate.id} className="p-4 rounded-md shadow-md bg-black flex flex-col justify-center min-h-[450px] border hover:shadow-white">
                                <div className='flex flex-col mb-4 text-left'>
                                    <div className="mb-2 text-center w-full">
                                        <strong className='text-blue-500 text-xl '>Position</strong> <br /> {candidate.jobRole}
                                    </div>
                                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent m-3 h-[1px] w-full" />
                                    <strong className='text-customGray'>Organisation</strong> {candidate.company}
                                    <strong className='text-customGray'>Stipend</strong> {candidate.stipend}
                                    <strong className='text-customGray'>Location</strong> {candidate.location}
                                    <strong className='text-customGray'>Skills Required</strong> {candidate.skills.join(', ')}
                                </div>
                                {candidate.applyUrl ? (
                                    <a href={candidate.applyUrl} target='_blank' className='block text-center'>
                                        <Button className='px-4'>
                                            Apply
                                        </Button>
                                    </a>
                                ) : (
                                    <Button className='px-4'>
                                        Apply
                                    </Button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CandidateSearch;
