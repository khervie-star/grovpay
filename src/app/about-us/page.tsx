"use client";

import React from "react";
import { LightBulbIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { TbTarget } from "react-icons/tb";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { siteUrls } from "@/config";

const AboutPage = () => {
  const teamMembers = [
    { name: "John Doe", role: "CEO & Founder" },
    { name: "Jane Smith", role: "CTO" },
    { name: "Mike Johnson", role: "Head of Design" },
    { name: "Sarah Brown", role: "Lead Developer" },
    { name: "Chris Lee", role: "Marketing Director" },
    { name: "Emily Wang", role: "Customer Relations Manager" }
  ];

  return (
    <div className="bg-[#f6f7f8]">
      <div className="bg-[#4B8957]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 flex items-center justify-between">
          <h1 className="text-[24px] lg:text-[28px] font-semibold text-white">
            About
          </h1>
          <Breadcrumbs
            underline="hover"
            classNames={{
              list: "bg-transparent"
            }}
            itemClasses={{
              item: "text-white/60 data-[current=true]:text-white",
              separator: "text-white/40"
            }}
            variant="solid">
            <BreadcrumbItem href={siteUrls.home}>Home</BreadcrumbItem>
            <BreadcrumbItem href="#">About us</BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B8957] mb-4">
              Why GroPay
            </h2>
            <p className="text-gray-500 mb-4 text-[15px]">
              Instant Online recharge and Bill Payments Iisque persius
              interesset his et, in quot quidam persequeris vim, ad mea essent
              possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius
              an, eu nec magna imperdiet. Mediocrem qualisque in has. Enim
              utroque perfecto id mei, ad eam tritani labores facilisis, ullum
              sensibus no cum. Eius eleifend in quo. At mei alia iriure
              propriae. Partiendo voluptatibus ex cum, sed erat fuisset ne, cum
              ex meis volumus mentitum. Alienum pertinacia maiestatis ne eum,
              verear persequeris et vim. Mea cu dicit voluptua efficiantur,
              nullam labitur veritus sit cu. Eum denique omittantur te, in justo
              epicurei his, eu mei aeque populo. Cu pro facer sententiae, ne .
            </p>
            <p className="text-gray-500 mb-4 text-[15px]">
              Instant Online recharge and Bill Payments Iisque persius
              interesset his et, in quot quidam persequeris vim, ad mea essent
              possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius
              an, eu nec magna imperdiet. Mediocrem qualisque in has. Enim
              utroque perfecto id mei, ad eam tritani labores facilisis, ullum
              sensibus no cum. Eius eleifend in quo. At mei alia iriure
              propriae. Partiendo voluptatibus ex cum, sed erat fuisset ne, cum
              ex meis volumus mentitum. Alienum pertinacia maiestatis ne eum,
              verear persequeris et vim. Mea cu dicit voluptua efficiantur,
              nullam labitur veritus sit cu. Eum denique omittantur te, in justo
              epicurei his, eu mei aeque populo. Cu pro facer sententiae, ne
              brute graece scripta duo. No placerat quaerendum nec, pri alia
              ceteros adipiscing ut. Quo in nobis nostrum intellegebat. Ius hinc
              decore erroribus eu, in case prima exerci pri. Id eum prima
              adipisci. Ius cu minim theophrastus, legendos pertinacia an nam.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 py-10">
            <section className="flex flex-col itemscenter textcenter">
              <div className="flex items-center gap-3">
                <TbTarget className="h-8 w-8 text-[#4B8957] mb-4" />
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B8957] mb-4">
                  Our Mission
                </h2>
              </div>

              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt nihil veritatis laborum voluptatum, autem
                exercitationem ratione expedita neque, aliquid, sint excepturi!
                Laudantium est, recusandae fugiat libero cum aperiam esse
                facere.
              </p>
            </section>

            <section className="flex flex-col itemscenter textcenter">
              <div className="flex items-center gap-3">
                <LightBulbIcon className="h-8 w-8 text-[#4B8957] mb-4" />
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B8957] mb-4">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt nihil veritatis laborum voluptatum, autem
                exercitationem ratione expedita neque, aliquid, sint excepturi!
                Laudantium est, recusandae fugiat libero cum aperiam esse
                facere.
              </p>
            </section>

            <section className="flex flex-col itemscenter textcenter">
              <div className="flex items-center gap-3">
                <CheckCircleIcon className="h-8 w-8 text-[#4B8957] mb-4" />
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#4B8957] mb-4">
                  Why Choose Us
                </h2>
              </div>
              <p className="text-gray-500 list-none pl-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt nihil veritatis laborum voluptatum, autem
                exercitationem ratione expedita neque, aliquid, sint excepturi!
                Laudantium est, recusandae fugiat libero cum aperiam esse
                facere.
              </p>
            </section>
          </div>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4B8957] mb-4">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg">
                  <img
                    src={`https://via.placeholder.com/150?text=${member.name}`}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#4B8957] text-center">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-center">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
