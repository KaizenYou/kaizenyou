'use client'

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import candidatesData from '../data/candidatesData.json';
import Button from './ui/Button';

interface Candidate {
    id: number;
    location: string;
    jobRole: string;
    experience: string;
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
    const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>(candidatesData);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(validationSchema),
    });

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
        setFilteredCandidates(candidatesData); // Show all candidates
    };

    return (
        <div className="p-6 max-w-4xl mx-auto w-full min-h-screen flex flex-col rounded-lg shadow-md">
            <div className="min-w-[60%] mt-28">
                <h1 className="text-3xl text-blue-500 mb-5 font-bold text-center uppercase">Search</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col items-center">
                    <div className='w-full'>
                        <label htmlFor="location" className="block mb-1 font-semibold ">Location</label>
                        <select
                            id="location"
                            {...register('location')}
                            className="w-full p-2 border border-gray-300 rounded-md text-black"
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
                        <label htmlFor="jobRole" className="block font-semibold  mb-1">Job Role</label>
                        <select
                            id="jobRole"
                            {...register('jobRole')}
                            className="w-full p-2 border border-gray-300 rounded-md text-black"
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
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                        {filteredCandidates.map((candidate) => (
                            <li key={candidate.id} className="p-4 rounded-md shadow-md bg-black flex flex-col justify-center min-h-[400px] border hover:shadow-white">
                                <div className='flex flex-col mb-4'>
                                    <div className="mb-2 text-center">
                                        <strong className='text-blue-500 text-xl '>Position</strong> <br /> {candidate.jobRole}
                                    </div>
                                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent m-3 h-[1px] w-full" />
                                    <strong className='text-customGray' >Experience</strong> {candidate.experience}
                                    <strong className='text-customGray'>Organisation</strong> {candidate.company}
                                    <strong className='text-customGray'>Organisation</strong> {candidate.stipend}
                                    <strong className='text-customGray'>Skills Required</strong> {candidate.skills.join(', ')}
                                </div>
                                {candidate.applyUrl ? (
                                    <a href={candidate.applyUrl} className='block text-center'>
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
