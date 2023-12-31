"use client";

import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import React from 'react'
import Image from 'next/image'

const SearchManufacturer = ({manufacturer, setManufacturer} : SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                    <Image
                        src='/car-logo.svg'
                        width={20}
                        height={20}
                        className='ml-4'
                        alt='Car logo'
                    />
                </Combobox.Button>

                <Combobox.Input 
                    className="search-manufacturer__input"
                    placeholder="Tsuru"
                    displayValue={(manufacturer : string) => manufacturer}
                    onChange={(event : any) => setManufacturer(event.target.value)}
                />
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer