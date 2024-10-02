(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// JavaScript for popup logic

// Store the data for each team member
const teamData = {
    1: {
      name: "Dr. Ke-Lin Du",
      info: "Enterprise Scientist, Xonlink Inc. Hangzhou, China",
      image: "images/committee/Ke-Lin_Du.jpg",
    },
    // Add other members here with unique IDs
    2: {
      name: "Dr. Vinod Pangracious",
      info: "Associate Professor, American University in Dubai",
      image: "images/committee/Vinod-Pangracious.jpg",
    },
    3: {
        name: "Dr. Debashish Adhikari",
        info: "Wing Commander (Dr) Debashis Adhikari (R) is a BTech from Institute of Radio Physics & Electronics, Calcutta University, ME from Pune University and obtained his PhD in Wireless Communication from the Defense Institute of Advanced Technology (DRDO), Pune. He served the Indian Air Force for 23 years before taking premature separation while in the rank of Wing Commander. He has a rich experience in surface to air missile systems and wireless systems of the IAF and was also involved in various indigenization and modification projects. He has delivered invited guest lectures at various Defense PSUs, few DRDO labs and Indian Navy on Missile Guidance. With a total experience of 31 years, Dr Adhikari had faculty tenures at DIAT (DRDO) Pune, Symbiosis Institute of Technology, Pune and was Professor & Dean, School of Electrical Engineering at MIT AOE, Pune before joining VIT Bhopal. His area of interest is MIMO Wireless systems. He has also handled the additional responsibility of Dean, Faculty & Staff Affairs. Dr Adhikari has organized “International Conference in Signal & Data Processing” under Springer (Nov 2019), co-edited “Advances in Signal & Data Processing (Springer) and is a regular reviewer of five SCI journals. He is a Fellow IETE and Member IEEE.",
        image: "images/committee/debashish.jpg",
    },
    4: {
        name: "Dr. Poonkuntran S",
        info: "Dr. S. Poonkuntran earned his Ph.D. in Computer and Information Technology from Manonmaniam Sundaranar University, Tirunelveli, India. He is having 15 plus years of experience in teaching/research. His research area of interest includes information security, computer vision, artificial intelligence, and machine learning. He executed three funded research grants from the Indian Space Research Organization, Defense Research Development Organization, and Ministry of New and Renewable Energy, Government of India. He received two seminar grants from Anna University, Chennai, and the All India Council for Technical Education-Indian Society for Technical Education. He has 3 patent publications and 70 plus technical paper publications. He has authored 6 books and 1 Chapter. He is a lifetime member of IACSIT, Singapore, CSI, India, and ISTE, India. He received Cognizant Best Faculty Award 2017-18 and served as a State Level Student Coordinator Position for Region VII, CSI, India in 2016-17.",
        image: "images/committee/poonkuntran.jpg",
    },
    5: {
        name: "Dr. Pon Harshavardhanan",
        info: "Dr. Pon Harshavardhanan is Senior Associate Professor in the School of Computing Science & Engineering, VIT Bhopal University, India. He was  awarded with B.E (CSE) from Bharathiar University, Coimbatore in the year 2001, M.E (CSE) from Sathyabama Institute of Science and Technology, Chennai in the year 2006 and doctoral degree Ph.D (CSE) from Anna University, Chennai in the year 2018. He has 15 years of teaching experience from engineering institutions and 2 years of industrial experience from IT industries. He has published 9 research articles in international and national journals. His research areas include semantic Web services, distributed systems, cloud computing, machine learning and data science.",
        image: "images/committee/pon.jpeg",
    },
    6: {
        name: "Dr. Pon Harshavardhanan",
        info: "Dr. Pon Harshavardhanan is Senior Associate Professor in the School of Computing Science & Engineering, VIT Bhopal University, India. He was  awarded with B.E (CSE) from Bharathiar University, Coimbatore in the year 2001, M.E (CSE) from Sathyabama Institute of Science and Technology, Chennai in the year 2006 and doctoral degree Ph.D (CSE) from Anna University, Chennai in the year 2018. He has 15 years of teaching experience from engineering institutions and 2 years of industrial experience from IT industries. He has published 9 research articles in international and national journals. His research areas include semantic Web services, distributed systems, cloud computing, machine learning and data science.",
        image: "images/committee/pon.jpeg",
    },

    7: {
        name: "Dr. Pushpinder Singh Patheja",
        info: "Dr. Pushpinder Singh Patheja is Division Head of Cyber Security and Digital Forensics at the School of Computing Science & Engineering, VIT Bhopal University, India. He has completed his Ph. D. and Post-Graduation from Maulana Azad National Institute of Technology (NIT), Bhopal. He has more than 30 years of experience in different academic and administrative roles in the field of teaching and research. He has more than 50 National and International papers to his credit. He is a member of various research organizations and has a specialization in computer networks, ad hoc networks, cyber security, and network security. He is a Mentor - Cyber Security of the globally recognized prestigious 'EC Council'. Also, He is a Program Evaluator of the National Board of Accreditation. Recently he has Completed the Certification of Certified Ethical Hacker (CEHv10) of EC-Council and is a NASSCOM Certified Trainer for Security Analyst SOC (SSC/Q0909: NVEQF Level 7). He was appointed as an Expert at Smart India Hackathon, 2017 and 2020 organized by MHRD and AICTE, New Delhi. He initiated VIT Bhopal ACM Student Chapter and has been instrumental in facilitating the collaborations for certifications namely Red Hat Certification for Linux and Ethical Hacking Certification of EC Council.",
        image: "images/committee/pushpinder.jpg",
      },

    8: {
        name: "Dr. M. Suresh",
        info: "Dr. M Suresh has completed his PhD in Digital Design from SUIIT, India in 2021. He holds a Master’s in Engineering (ME) from Jadavpur University and Bachelor’s in Engineering (BE) from Andhra University in ECE. With over 25 years in academic and research, he has made significant contributions. Dr. Suresh has a strong publication record with numerous papers published in repute journals and conferences. He also played pivotal role in developing employment-oriented courses, such as VLSI design engineering and FPGA design. In addition, he has mentored several undergraduate and post graduate projects nurturing the next generation of engineers and researchers. He is a active member of professional organizations, including being life member of Indian Society for Technical Education (ISTE), the Institution of Electronics and Telecommunication Engineers (IETE), and a member of Institute of Electrical and Electronics Engineers (IEEE). His primary Research interests encompass Digital design, FPGA design, and Microprocessor based system design reflecting his dedication to advancing the filed and sharing his expertise with others.",
        image: "images/committee/Dr.-M-Suresh-removebg-preview_11zon.jpg",
      },

    9: {
        name: "Dr. Hemant Kumar Nashin",
        info: "Dr Hemant K Nashine is a Doctorate from Pt Ravishankar Shukla University and pursued his postdoctoral research at Texas A and M University Kingsville of USA as a Fulbright-Nehru Post Doctorate Fellow. He has an academic experience of 20 years and has worked at various levels up to Professor and HOD. He has 170 Scopus publications including 100 Science Citation Indexed in International Journals, and 10 book chapters in international publications. He has given 15 invited talks in the international/National conferences.  He has visited Switzerland, Vietnam, South Korea, Thailand and Brazil to present research papers. He has completed 4 International and National Projects. He has handled the special issues of International journal as Lead-Editors and editors. He is a reviewer of many journals associated with Elsevier, Springer, Hindawi, Taylor & Francis and MDPI publishers. He has guided 3 PhD students.",
        image: "images/committee/hemant.jpg",
      },

    10: {
        name: "Dr. Sheetal Sharma",
        info: "Dr. Sheetal Sharma is a professional academic with a focus on architecture and urban planning who is motivated to forge a connection between fruitful scholarly investigation, prodigious varied practical activities, and excellent scholarly instruction. She is the first Madhya Pradesh valuer authorised by the government under Section 34 AB of the wealth tax act, and she has 24 years of professional expertise in addition to her 12 years of teaching experience.    She is an executive member of the IIA Bhopal, the joint secretary of the FSAI Bhopal Chapter, and the secretary of the ITPI MP Regional Chapter. She holds the prestigious chartered diploma from the Royal Institute of British Architects (RIBA) in the United Kingdom. She is one of the IEEE professional community's most senior members. She is a senate member of SPA Delhi. She graduated from Amravati University with a gold medal in 1997, took first place in the Master's course in urban development planning at MANIT in 2010, earned her Ph.D. from MANIT in 2015, and has won multiple more gold medals. She also has a great deal of national and international recognition, including best paper honours from conferences held in Glasgow, Canada, Paris, Singapore, Dubai, and other places. Working on sustainable urban planning research, master plans, smart cities, water conservation, etc. with a number of environmental research organisations, including EPCO, IES, Smart Cities, Urban Conservation, etc., University of Edinburgh, and Strathclyde University UK. The \"Women Researcher Award\" in the 2021 International Scientist Awards on Engineering, Science, and Medicine by HYDRA, the \"Bharat Ratna Indira Gandhi Gold Medal Award\" by Global Economic Research Progress and Research Associates, GEPRA, Tamil Nadu, and the \"Women Excellence Awards 2021\" in the fields of architecture and urban planning by the International Leadership Development Council (ILDC) Academy are just a few of the honours given to Dr. Sheetal for her work.",
        image: "images/committee/Dr.Sheetal-Pic-removebg-preview.jpg",
      },

    11: {
        name: "Dr. Prasad Begde",
        info: "Dr. Prasad Begde has a PhD, MBA, and BBA in Business Administration. He has more than seventeen years of teaching and research experience. Before joining VIT, he worked abroad for seven years. He worked as a faculty member with various universities and different countries and cultures, such as in India (Asia), the Republic of Fiji (Australian Territory), and Oman (Arabic Region). His previous institute, SUC College, Oman, is affiliated with Bond University, Australia, and his PG course is at Sunderland University, United Kingdom. He worked with the Fiji National University, Fiji, Sur University, Oman, and MITS Deemed University in India. His areas of teaching and research interest included Strategy, Entrepreneurship, Leadership, Marketing, E-Marketing, Consumer Behavior, Retail Management, Branding, and International Marketing. He has organised several National and International Conferences and is credited with research publications in various refereed journals. He has several journal publications with SCOPUS, ABDC listed peer revived Journals and National and International books such as \"Emerging Trends in Retail Management.\" He is on various editorial boards, such as the Chintan Research Journal and the IJBASS. He attended various teaching and professional development training program, including FDP from the Indian Institute of Management, Kozhikode (IIMK). He has several patents, such as \"DSS in Retail\" under Australian Patent Rights. He is also a member of various institutional and professional bodies, such as the IMRTC, USA, and Harvard Business Education. He also received the best professor award from IBA. He has guided various projects for bachelor's, master's, and PhD students in the management area.",
        image: "images/committee/Dr-Prasad-Begde-removebg-preview.jpg",
      },

    12: {
        name: "Dr. Siddhartha Maiti",
        info: "Dr. Siddhartha Maiti completed his MS and PhD in Biomedical engineering & Biotechnology from University of Massachusetts, Dartmouth, USA. Shortly after completing his PhD, he joined Intel Corporation, Oregon, USA as a Process TD Engineer, involved in the development and enhancement of various semiconductor chips. Prior to joining VIT Bhopal he was a Research Associate in Indian Institute of Technology, Bombay. His research interests include development of fluorescent sensors for bio-imaging of metal ions, development of controlled drug delivery system with electro spun nanofibers, development of small molecular inhibitors against disease-associated protein oligomerization and amyloid formation, role of liquid –liquid phase separation of proteins in understanding human neurodegenerative diseases such as Alzheimer’s, Parkinson’s and Prions.",
        image: "images/committee/Dr.Siddhartha-Maiti_C.jpg",
      },

    13: {
        name: "Dr. S. Balaguru",
        info: "Dr. S. Balaguru obtained his BE in Mechanical Engineering from Manonmanium Sundaranar University, M.Tech from IIT Madras and PhD from College of Engineering Guindy under Anna University. He carried out his postdoctoral research work at National University of Singapore. He works as Dean in-charge of School of Mechanical Engineering at VIT Bhopal. He has 27 years of experience in leading Engineering Institutions out of which he worked as Professor & HoD for 11 years. In 2019, he was invited to Kocaeli University, Turkey, under the Mevlana Mobility Programme with a grant as an International faculty to handle a technical course. He solely authored a best- selling textbook on Dynamics of Machines under the Cengage Learning. He brought out an edited book on Recent Advances in Mechanical Engineering under Springer publications. In 2008, his proposal fetched a grant of Rs. 8 lakhs under the MODROBS Scheme. He established an International chapter known as Material Advantage Student Chapter at VIT Bhopal as Faculty Advisor. He has guided 3 PhD scholars and 30 M.Tech projects. He published more than 50 papers in reputed journals. He presented 30 papers in the International conferences held in India and abroad. He has 5 patents and several book chapters to his credit. He has been a reviewer for many reputable journals. He visited Singapore, Hong Kong, Malaysia, Indonesia, Thailand, Cambodia and Turkey for academic works. His research fields are cladding, composites and nuclear materials. He is a Fellow as well as CEng. of the Institution of Engineers. He is a member of the American Society of Mechanical Engineers (ASME). He is a life member of Indian Society for Technical Education (ISTE).",
        image: "images/committee/Dr.Balaguru_C.jpg",
    },

    14: {
        name: "Dr. Hemraj. S. Lamkuche",
        info: "Dr. Hemraj Lamkuche is a renowned cryptographer known for his ground-breaking work in the field of cybersecurity. He showed a keen interest in mathematics and computer science, and his exceptional academic performance earned him a scholarship to pursue a full-time Ph.D. at the prestigious Symbiosis International University in Pune. After completing his undergraduate and graduate degree in computer science North Maharashtra University, Jalgaon, Dr. Lamkuche pursued a M.Phil. in Information Security at the Bharathiar University Coimbatore, Tamil Nadu. During his time at BU, CBE, he worked closely with some of the leading cryptographers around the world and made significant contributions to the field.Dr. Lamkuche holds many publications under peer-reviewed International Journals/Conferences. He also published two patents in the National and International forum. Dr. Lamkuche worked extensively on designing efficient and provably secure protocols, considering real-world constraints and privacy requirements. He gained a comprehensive understanding of Cryptography, VAPT (Vulnerability Assessment and Penetration Testing), Information Security, Digital Twins and Blockchain Technology techniques and their application in real-world scenarios. His research involved working on novel approaches to ensure the provable security of cryptographic protocols, combining mathematical foundations with practical implementation considerations. In addition to research capabilities, Dr. Lamkuche has excellent programming skills and has hands-on experience with various programming languages such as Solidity, Python, and C++.Dr. Lamkuche has been an external speaker in various faculty development program and recognized cybersecurity expert and conducted Training Programme on Cyber Security & Crime, for Armed Forces (Army, Navy and Air Force) & Civil Services Officers (including IAS, IPS, IFS Cadre) which is being conducted by YASHADA (A Government of Maharashtra Organization) under the aegis of the Director (Training) DoPT, New Delhi.Overall, Dr. Hemraj Lamkuche is a highly respected figure in the field of cryptography from the last 11+ years and a leading voice in the fight to protect online security and privacy. His innovative research has paved the way for many of the modern encryption techniques used today, and his work continues to inspire and influence the next generation of cryptographers. Dr. Lamkuche is a renowned associate member of IACR (International Association for Cryptologic Research), Member of Nvidia CUDA Developer and Holds  Professional Membership of IEEE.",
        image: "images/committee/Dr.-Hemraj-S.-Lamkuche.jpg",
    },

    15: {
        name: "Dr. Venkat Prasad Padhy",
        info: "Venkat Prasad Padhy, obtained his PhD from SERC, Indian Institute of Science (IISc), Bangalore, India. His research interests include application of Computational Electromagnetics (CEM) for solving real world problems such as Radar Cross Section (RCS) computation, RCS from Aircraft Wake-Vortex, RCS of stealth aircrafts, RCS enhancement and reduction, Antenna Simulations, High Performance Computing (HPC) using MPI, OpenMP, GPU – CUDA, OpenACC on heterogeneous architectures and platforms. Along with the PhD, he also worked with Aeronautical Development Agency (ADA, DRDO) and SAMEER, Chennai (Department of Electronics, Government of India) as a Project Associate. Currently working on mathematical modeling of Global Navigation Satellite System – Reflectometry (GNSS-R) Technique and solver development for remote sensing applications in collaboration with NARL-ISRO.",
        image: "images/committee/Dr.Venkat-Prasad-Padhy1_C.jpg",
      },

    16: {
        name: "Dr. H Azath",
        info: "Dr. H. AZATH, Associate Professor, VIT Bhopal University, INDIA. Dr. Azath received his degrees Ph.D, ME, BE in the field of Computer Science & Engineering and M.TECH in IT and MBA in Education Management. He has 18+ years of academic and administrative experience under various capacities in India and abroad. He is a reviewer for two international journals of SCI indexed. He has also been a reviewer in International Conference at University of Missourie (UMKC), Kansas City, US. Dr. Azath has 13 patents to his credit and 25 publications in WoS/SCI/Scopus indexed journals/conferences. He has also authored 4 books and 2 book chapters. He has more MOOCs certifications includes Cambridge English Certification (BEC) and AICTE-NITTTR Module 1. His areas of interest are Secure Software Engineering, Cyber Security, Artificial Intelligence, Networking, Integrated Product Development, Programming and Data Structures, OOAD, C & C++. He has collaborated with a number of International faculty in Academics and Research and is a Member of ISTE since 2005.",
        image: "images/committee/Dr.-H.-AZATH_100187.jpg",
      },

    17: {
        name: "Dr. Virendra Singh Kushwah",
        info: "Dr. Virendra Singh Kushwah is working as a Senior Assistant Professor and Program Chair in the Cloud Computing & Automation, School of Computing Science and Engineering, VIT Bhopal University. Dr. Kushwah earned his Ph.D. in Computer Science and Engineering from Maharishi Markandeshwar Deemed-to-be University, Ambala (NAAC-A++) and M.Tech. (Information Security) in CSE from ABV-IIITM, Gwalior (National Importance University). He has more than 15 years academic experience including various administration positions. He has more than 35 research publications and two patents. Dr. Kushwah chaired three international conferences and delivered various invited talks. He is also reviewers of SCI journals like Multimedia Tools and Applications, IEEE Intelligent Systems, Wireless Personal Communications etc. and also international conferences. His area of expertise is fault tolerant and load balancing on cloud computing, machine learning, information security. ",
        image: "images/committee/Dr.-Virendra.jpg",
      },

    18: {
        name: "Dr. Devaraju S",
        info: "Dr. S. Devaraju is an Senior Assistant Professor in the School of Computing Science and Engineering (SCSE) at VIT Bhopal University. He received his Doctorate from Anna University, an M.Phil in Computer Science from Periyar University and an MCA in Computer Applications from Periyar University. He has an academic experience of 19 years and 2 years of Industry at various levels. He has 20 publications in peer reviewed International/National journals and has 20 publications in various International/National Conferences. Dr. Devaraju has organized/Attended a number of Conferences, Workshops and FDP. Dr.Devaraju has published 2 patents, 5 Book Chapters and Reviewer for various reputed Journals and Conferences. He is a lifetime member of IACSITand ISTE, India. His area of research includes Network Security, Intrusion Detection, Soft Computing, and Wireless Communication.",
        image: "images/committee/Dr.-Devaraju.jpg",
      },

    19: {
        name: "Dr. Shiv Manjaree Gopaliya",
        info: "Dr Gopaliya has served at various academic and administrative positions at various academic Institutes for more than 12 years. She has served at The NorthCap University (Formerly ITM University), Gurugram (2008-2018) for close to a decade where apart from her teaching commitments, she has successfully completed Government and industry sponsored research projects both and has served as Audit Coordinator for various Accreditation bodies namely, NBA, NAAC, IQAC to name a few. Dr Gopaliya holds a PhD in Robotics Engineering and M Tech in Robotics and Automation from Maharishi Dayanand University, Rohtak, Haryana. She is a Mechanical Engineering graduate from Government Engineering College, Jagdalpur, Chattisgarh. She is an active researcher in the area of application of Artificial Intelligence in Robotics. She is a life member of Aeronautical Society of India.",
        image: "images/committee/Dr-Shiv-Manjaree-Gopaliya_C.jpg",
      },

    20: {
        name: "Dr. Siddharth Singh Chouhan",
        info: "Dr. Siddharth Singh Chouhan has completed PhD in Computer Science and Engineering from Shri Mata Vaishno Devi University, Katra, Jammu and Kashmir. He pursued his Post Doctoral Research from University of Malta, Msida, Europe. He has about 6 years of academic experience. Dr. Siddharth has authored about 28 research papers including 09 SCIE and 01 Scopus indexed publications. His areas of research interest include Computer Vision, Deep Learning,  and Smart Agriculture. He is also a Reviewer for various journals including IEEE Transactions on Artificial Intelligence, IEEE Systems Journal, IEEE Transactions on Systems, Man and Cybernetics: Systems, Computers in Biology and Medicine, IEEE Access, and many more.",
        image: "images/committee/Dr.-Siddharth-Singh-Chouhan-C.jpg",
      },

    21: {
        name: "Dr. Swagat Kumar Samantaray",
        info: "Dr.Swagat Samantaray has completed his Ph.D. from AcSIR - Academy of Scientific & Innovative Research, India at CSIR-Central Scientific Instruments Organisation, Chandigarh, in the year 2019 with a specialization in embedded systems. He has done his M.Tech and B.Tech with specialization in Electronics and Communication Engineering from the National Institute of Science & Technology, Odisha. He has a number of publications in reputed journals and conferences. Has 10 plus years of experience in teaching and research, also contributed to different industry-oriented and skill development courses like RTOS, Device driver development, Robotics, Embedded system etc. He has guided a group of students in the field of Robotic and embedded systems; under his supervision, his team won numerous national awards in various robotics competitions. His research interest lies in embedded systems, robotics, smart sensors, and IOT.",
        image: "images/committee/Dr.-Swagat-Samantaray_C1.jpg",
      },

    22: {
        name: "Dr. D. Saravanan",
        info: "Dr. D. Saravanan is an Senior Assistant Professor in the School of Computing Science and Engineering at VIT Bhopal University. He holds Doctorate in Computer Science Engineering and Master Degree in Network and Internet Engineering from Pondicherry University (A Central University), Pondicherry, and Bachelor’s degree in Information Technology from Anna University. In addition to academics he trained in Technology like Rational Software Architect, Cyber security in industry. He has 10+ years of academic experience had been in charge of various administrative responsibilities. He has published research articles and book chapters in highly reputed international journals and like SCI, Scopus, Springer, and Web-of-Science and Conferences. He has 2 patents to his credit and has received research incentive scheme award for his research contributions. He is a reviewer for reputed SCI & Scopus Indexed Journals like Computer Communications – Elsevier Publications, John Wiley & Sons Publications, Emerald Publications etc. He is also a Member of IEEE and Lifetime Member of Indian Society for Technical Education. His research interests include Computer Networks, Vehicular Ad-hoc networks, Cyber Security, SD-WAN, IoT, Bio-Inspired Computing, Optimization Algorithms.",
        image: "images/committee/sarvanan.jpeg",
      },

    23: {
        name: "Dr. Adarsh Patel",
        info: "Dr. Adarsh Patel is a doctorate in Computer Science and Engineering from Maulana Azad National Institute of Technology, Bhopal (MANIT) and an M.Tech. in Computer Science from National Institute of Technology Tiruchirappalli, Tamilnadu (NITT). He has worked in various reputed educational institutes of National Importance. He has software industry experience of 2+ years of working in Oracle India Private Limited, Bangalore (Server Technologies Branch). He has conducted expert lectures  in several Institute of National Importance. He secured All India Gate Rank 254 in GATE-2007. He has won a 50000/- Rs. cash prize award for teaching a B.Tech. level course. He has published various research articles in reputed journals and conferences of his research area Wireless Communication, VANET and Intelligent Transportation System (ITS).",
        image: "images/committee/Dr.-Adarsh_Patel_C.jpg",
      },

    24: {
        name: "Dr. Subhash Chandra Patel",
        info: "Dr.Subhash Chandra Patel received his PhD degree in CSE from IIT (BHU), Varanasi in 2018 and M.Tech. degree in Information Security from the Guru Gobind Singh Indraprashtha University, New Delhi in 2010. Currently,B.Tech in CSE in 2006. Currently he is working as an Senior Assistant Professor in the School of Computer Science and Engineering at VIT University Bhopal. Dr. Subhash Patel has Four years of Experience in Teaching. He got published various research papers in National and international conferences and Journals also. He reviewed various paper for Transactions on Cloud Computing Journal. His research interests include Cloud Computing Security, Information Security, Internet of Things and Software Engineering.",
        image: "images/committee/Dr.Subhash-Chandra-Patel_C.jpg",
      },

    25: {
        name: "Dr. M. Manimaran",
        info: "Dr. M.Manimaran is a Doctorate from Anna University and M.E in Computer Science & Engineering from SVS College of Engineering & Master of Computer Applications in Amrita Vishwa Vidyapeetham, Ettimadai, Coimbatore. He also completed his M.Phil in Computer Science in Bharathiar University. He has an academic experience of 17 years and has worked at various levels up to Principal  & Associate Professor. He has 8 publications, in peer reviewed International/National journals with high impact factor and has 24 publications in various International Conferences held in India and abroad. Dr.M.Manimaran has been an expert speaker in various Faculty Development Programmes and has organized a number of Conferences, Workshops and Short term courses. He has authored a book titled Computer Networks. He was a LIfe Time Membership in International Association of Engineers (IAENG).He was awarded a Best Eduprenaur in the Year 2018 from Nehru Group of Institutions, Coimbatore, Tamil Nadu.He was also awarded a global peace award by Miss Peace Ambassador Global for his outstanding achievements in field of  Social Development and Education in the year 2022 at New Delhi.",
        image: "images/committee/Dr.-M.Manimaran.jpg",
      },
    
    26:{
        name: "Dr. Senthil Kumar Arumugam",
        info: "Dr. Senthil Kumar Arumugam is the Vice Chancellor of VIT Bhopal University. He has been instrumental in the development of various academic programs and has vast experience in higher education management. Dr. Arumugam is known for his leadership in fostering innovative teaching methodologies and research-driven educational reforms. He has also played a pivotal role in the internationalization of the university and building collaborations with global educational institutions. His academic achievements and visionary approach have greatly contributed to the university’s reputation in the academic world.",
        image: "images/committee/Pro-VC-Sir_C.jpg"
    },  

    27:{
        name: "Ms. Kadhambari S. Viswanathan",
        info: "Ms. Kadhambari S. Viswanathan serves as the Assistant Vice President at VIT Bhopal University. With her keen understanding of educational administration and her dedication to promoting innovative academic practices, she has been instrumental in shaping the university’s strategic direction. Her leadership has brought in new initiatives focused on student-centric learning, international collaborations, and educational excellence. Ms. Viswanathan’s visionary approach has led to the enhancement of the institution’s academic profile and its position as a leader in higher education.",
        image: "images/committee/kadambari.jpg"
    },

    28:{
        name: "Mr. Sankar Viswanathan",
        info: "Mr. Sankar Viswanathan is the Vice President of VIT Bhopal University. With a strong commitment to advancing higher education, Mr. Viswanathan plays a pivotal role in overseeing the institution's development and growth. His leadership has contributed to the university's progress in academic excellence, infrastructure development, and student welfare initiatives. Mr. Viswanathan's vision for a modern, student-centered learning environment has helped place VIT Bhopal University on the map as a leading institution for higher education.",
        image: "images/committee/vp.jpg"
    },

    29:{
        name: "Hon'ble Dr. G. Viswanathan",
        info: "Hon'ble Dr. G. Viswanathan is the Founder and Chancellor of VIT University. A visionary leader, he established VIT with the aim of providing quality education on par with international standards. Dr. Viswanathan has played a significant role in shaping the educational landscape in India, with his focus on innovation, research, and student-centric learning. His dedication to creating world-class infrastructure and fostering global collaborations has made VIT University a premier institution for higher education.",
        image: "images/committee/5.G.VISWANATHAN-Chancellor-e1686643660631.jpg"
    },

    30: {
        name: "Dr. Ke-Lin Du",
        info: "Ke-Lin Du (M’01—SM’09) received the Ph.D. in electrical engineering from Huazhong University of Science and Technology, Wuhan, China, in 1998. He founded Xonlink Inc. in March 2014. He was Chief Scientist at Enjoyor Inc. from 2011 to 2014. He was on the research staff at the Department of Electrical and Computer Engineering, Concordia University, Montreal, Canada from 2001 to 2010. Prior to 2001, he was on the technical staff with Huawei Technologies, China Academy of Telecommunication Technology, and Chinese University of Hong Kong. He worked with Hong Kong University of Science and Technology in 2008. He is currently an Affiliate Professor at the Department of Electrical and Computer Engineering, Concordia University. Currently, his research interests are signal processing, wireless communications, neural networks and machine learning.,Dr. Du has coauthored three books (Neural Networks in a Softcomputing Framework, Springer, 2006; Wireless Communication Systems, Cambridge University Press, 2010; Neural Networks and Statistical Learning, Springer, 2014). He has also published over 50 papers, and has 4 U. S. patents and 14 Chinese patents. He has been on the editorial board or been Associate Editor of several journals, including IET Signal Processing and Circuits, Systems & Signal Processing. He also serves on the editorial board of the Chinese edition of IEEE Spectrum.",
        image: "images/committee/Ke-Lin_Du.jpg",
    },
    // Add other members here with unique IDs
    31: {
        name: "Dr. Vinod Pangracious",
        info:"Dr. Pangracious joined AUD in 2014. Prior to that, he was a doctoral researcher at the University of Pierre and Marie Curie Paris VI, France. He earned his undergraduate degree from the Cochin University (’95) and graduate degree from Indian Institute of Technology Bombay (IITB) in 2001. He started his career as a Product Design Engineer at Cypress Semiconductor Inc., CA, USA. In 2004, he moved to Germany and joined Infineon Technologies AG as a Development Engineer. In 2007, he joined Innovative Silicon SA- Switzerland as a Member of the Technical Staff (Principle Design Engineer) and worked with a team of engineers and entrepreneurs to develop Zero Capacitor Memory (ZRAM). Dr. Pangracious joined AUD in 2014. Prior to that, he was a doctoral researcher at the University of Pierre and Marie Curie Paris VI, France. He earned his undergraduate degree from the Cochin University (’95) and graduate degree from Indian Institute of Technology Bombay (IITB) in 2001. He started his career as a Product Design Engineer at Cypress Semiconductor Inc., CA, USA. In 2004, he moved to Germany and joined Infineon Technologies AG as a Development Engineer. In 2007, he joined Innovative Silicon SA- Switzerland as a Member of the Technical Staff (Principle Design Engineer) and worked with a team of engineers and entrepreneurs to develop Zero Capacitor Memory (ZRAM).",
        image: "images/committee/Vinod-Pangracious.jpg",
    },
    32: {
        name: "Dr. Xavier Fernando",
        info: "Xavier Fernando is the Director of TMU Intelligent Communication and Computing Lab (formerly Ryerson Communication Lab). He has (co-)authored over 200 research articles, three books (one translated to Mandarin), several book chapters and holds few patents. He was an IEEE Communications Society Distinguished Lecturer and has delivered over 70 invited talks and keynote presentations. He was a member in the IEEE Communications Society (COMSOC) Education Board Working Group on Wireless Communications. He was the Chair of IEEE Canada Humanitarian Initiatives Committee 2017-18. He was also the Chair of the IEEE Toronto Section and IEEE Canada Central Area. His work (with the students) has won over 30 Honors and Prizes so far including, Professional Engineers Ontario Award in 2016; IEEE Microwave Theory and Techniques Society Prize in 2010, Sarnoff Symposium Prize in 2009, Opto-Canada best poster prize in 2003 and CCECE best paper prize in 2001.His work (with the students) has won over 30 Honors and Prizes so far including, Professional Engineers Ontario Award in 2016; IEEE Microwave Theory and Techniques Society Prize in 2010, Sarnoff Symposium Prize in 2009, Opto-Canada best poster prize in 2003 and CCECE best paper prize in 2001. He is a program evaluator for ABET (USA). He was a visiting scholar at the Institute of Advanced Telecommunications (IAT), UK in 2008 and MAPNET Fellow visiting Aston University, UK in 2014. Ryerson University nominated him for the Top 25 Canadian Immigrants award in 2012 in which was a finalist.",
        image: "images/committee/Xavier.jpg",

    },
    33: {
        name: "Dr. Valentina Emilia Balas",
        info: "Valentina E. Balas (SM’07) received the Ph.D. degree in applied electronics and telecommunications from the Polytechnic University of Timisoara. She is currently a Full Professor with the Department of Automatics and Applied Software, Faculty of Engineering, Aurel Vlaicu University of Arad, Romania. She is the author of more than 190 research papers in refereed journals and International Conferences. Her research interests are in intelligent systems, fuzzy control, soft computing, smart sensors, information fusion, modeling, and simulation. She was the General Chair of the International Workshop Soft Computing and Applications from 2005 to 2016 held in Romania and Hungary. She is the Editor-in Chief of the International Journal of Advanced Intelligence Paradigms and the International Journal of Computational Systems Engineering, an Editorial Board member of several national and international journals and is an expert evaluator for national and international projects. She participated in many international conferences as Organizer, Session Chair and a member of the International Program Committee. She is a member of EUSFLAT, the ACM, TC–Fuzzy Systems (IEEE CIS), TC–Emergent Technologies (IEEE CIS), TC–Soft Computing (IEEE SMCS). She was a recipient of the Vice President (Awards) of the IFSA International Fuzzy Systems Association Council from 2013 to 2015. She is a Joint Secretary of of the Governing Council of Forum for Interdisciplinary Mathematics - A Multidisciplinary Academic Body, India.",
        image: "images/committee/Valentina.jpg",

    },
    34: {
        name: "Prof. Xiaozhi Gao",
        info: "Xiao-Zhi Gao received the B.Sc. and M.Sc. degrees from the Harbin Institute of Technology, Harbin, China, in 1993 and 1996, respectively, and the D.Sc. (Tech.) degree from the Helsinki University of Technology (now Aalto University), Espoo, Finland, in 1999.,He was appointed as a Docent with the Helsinki University of Technology in 2004. He has been working as a Professor with the University of Eastern Finland, Kuopio, Finland, since 2018. His current research interests are nature-inspired computing methods with their applications in optimization, data mining, machine learning, control, signal processing, and industrial electronics.",
        image: "images/committee/Gao.jpg",
    },
    35: {
        name: "Dr. Thangavel Murugan",
        info: "Dr. Thangavel Murugan (Senior Member - IEEE) serving as Assistant Professor in the Department of Information Systems and Security, College of Information Technology, United Arab Emirates University. His academic and research specialization is Information Security, High Performance Computing, Ethical Hacking, Cyberforensics, Blockchain, Data Science for Cybersecurity and Educational Technology. He received Doctorate from Madras Institute of Technology (MIT) Campus, Anna University – Chennai, received Post Graduate degree as M.E. Computer Science and Engineering from J.J. College of Engineering and Technology, Trichy under Anna University – Chennai (University First Rank Holder & Gold Medalist) and received Bachelor’s degree as B.E. Computer Science and Engineering from M.A.M College of Engineering, Trichy under Anna University – Chennai (College First Rank Holder & Gold Medalist).  He presently holds 11+ years of Teaching and Research experience from various academic institutions. He has published 10+ International Journals, 15+ book chapters in International Publishers, 25+ in International Conferences and 3 in National conferences /seminars.Dr. Thangavel Murugan (Senior Member - IEEE) serving as Assistant Professor in the Department of Information Systems and Security, College of Information Technology, United Arab Emirates University. His academic and research specialization is Information Security, High Performance Computing, Ethical Hacking, Cyberforensics, Blockchain, Data Science for Cybersecurity and Educational Technology. He received Doctorate from Madras Institute of Technology (MIT) Campus, Anna University – Chennai, received Post Graduate degree as M.E. Computer Science and Engineering from J.J. College of Engineering and Technology, Trichy under Anna University – Chennai (University First Rank Holder & Gold Medalist) and received Bachelor’s degree as B.E. Computer Science and Engineering from M.A.M College of Engineering, Trichy under Anna University – Chennai (College First Rank Holder & Gold Medalist).  He presently holds 11+ years of Teaching and Research experience from various academic institutions. He has published 10+ International Journals, 15+ book chapters in International Publishers, 25+ in International Conferences and 3 in National conferences /seminars.",
        image: "images/committee/murugan.jpg",
    },
    36: {
        name: "Prof Henry Herman Loupias",
        info: " Henry Herman Loupias is the President Director of PT. Loupias Event Organizer (LEO) Jejaring Ilmu, Bandung, Indonesia. He is a multi-talented person who has many skills that he learned autodidactically. He has more than 40 years of experience as freelance writer on art and culture,creative industries, vernacular architecture, Dutch colonial traditions, and tourism. Since 2010, he has been a research proposal consultant and reviewer for Scopus-indexed journals. He is currently an external reviewer for several Scopus-indexed journals such as the Journal of Asian Business and Economic Studies, Vietnam (JABES Scopus Q1-at present) and Halduskutuur, Estonia (Scopus Q4-at present). In addition, his position is as Managing Editor for several journals of PT. Loupias Event Organizer (LEO) Jejaring Ilmu. Henry has a lot of experiences in various arts, culture and academic forums abroad such as being invited as a guest speaker by the Singapore Art Museum, Singapore (2003); invited as a guest speaker at the Koninklijk Instituut voor Taal en Levenkunde (KITLV), Leiden, the Netherlands (2008); received a grant as a participant in the intellectual property (IP) seminar at the Salzburg Global Seminar, Austria (2008); graphic art workshop at Bethanien Kuntwerk, Berlin, Germany (2010); visiting researcher at the Department of Anthropology, Leiden Universiteit, the Netherlands (2013) with supervisors Prof. Gerard Persoon (anthropologist) and Doctor Jet Bakels (anthropologist and museum curator); as selected participant in Journal Publishing Workshop organized by Leicester University, UK with the Ho Chi Minh University of Economics (UEH), Ho Chi Minh, Vietnam (2018). As a presenter at several international conferences at the University of Morotowa, Colombo, Sri Lanka (2010); in Hiroshima (2010), Nagoya (....), Tokyo (2015); Burgas, Bulgaria (.....), and Ho Chi Minh, Vietnam (2019). His educational background is Bachelor of Graphic Arts (1986) and Master of Design (1996) both from the Faculty of Fine Arts and Design, Institut Teknology Bandung (ITB). Currently, Doctoral Candidate in Economics at a university in Surabaya. He has communication skills in English and Dutch. He is a vegetarian who has hobbies walking, traveling, document photography, reading, writing, and collecting Dutch heritage objects.",
        image: "images/committee/henry.jpg",
    },
    37: {
        name: "Prof. Richard Kwasi Bannor",
        info: "R.K. Bannor currently works as an Associate Professor of Agribusiness Management at the Department of Agribusiness Management and Consumer Studies, University of Energy and Natural Resources. He does research on the development and sustaining of Agribusiness MSMEs. Specifically in Agricultural and Rural Marketing; Consumer Studies; Supply Chains; Total Quality Management Practices, and Agricultural Intellectual Property Regimes.",
        image: "images/committee/Richard.jpg",
    },
    38: {
        name: "Prof. Bruce Schneier",
        info: "Bruce Schneier is an internationally renowned security technologist, called a security guru by the Economist. He is the New York Times best-selling author of 14 books -- including A Hacker's Mind -- as well as hundreds of articles, essays, and academic papers. His influential newsletter Crypto-Gram and blog Schneier on Security are read by over 250,000 people. Schneier is a Lecturer in Public Policy at the Harvard Kennedy School, a faculty affiliate at the Ash Center for Democratic Governance and Innovation at HKS, a fellow at the Berkman-Klein Center for Internet and Society at Harvard University, a board member of the Electronic Frontier Foundation and AccessNow, and an advisory board member of EPIC and VerifiedVoting.org. He is the Chief of Security Architecture at Inrupt, Inc. ",
        image: "images/committee/bruce.jpg",
    },
    39: {
        name: "Prof. Vidy Potdar",
        info: " Dr. Vidy Potdar serves as the Director of the Blockchain Research and Development Laboratory (BRDL) at Curtin University in Perth, Australia. At BRDL, he spearheads a dedicated team specializing in the research, development, and implementation of commercial Blockchain, AI, and IoT solutions for industry and governmental clients. Under Dr. Vidy's stewardship since the establishment of the Blockchain Laboratory in 2019, the team has successfully executed eight notable blockchain projects spanning diverse sectors such as agriculture, sustainability, mining, art, healthcare, supply chain, photography, and recycling in Australia. Follow us on LinkedIn. Demonstrating astute industry collaboration, Dr. Vidy has garnered over $1.5 million in external research funding. His illustrious career is accentuated by an impressive publication track record and the successful guidance of 20 PhD candidates to completion. He remains an active voice in the media with over 60 engagements and offers insights into his research endeavors on his YouTube Channel.",
        image: "images/committee/Vidy.jpg",
    },
    40: {
        name: "Prof Rajkumar Buyya",
        info: "Dr. Rajkumar Buyya is a Redmond Barry Distinguished Professor and Director of the Cloud Computing and Distributed Systems (CLOUDS) Laboratory at the University of Melbourne, Australia. He is also serving as the founding CEO of Manjrasoft, a spin-off company of the University, commercializing its innovations in Cloud Computing. He served as a Future Fellow of the Australian Research Council during 2012-2016. He has authored over 625 publications and seven text books including Mastering Cloud Computing published by McGraw Hill, China Machine Press, and Morgan Kaufmann for Indian, Chinese and international markets respectively. He also edited several books including Cloud Computing: Principles and Paradigms (Wiley Press, USA, Feb 2011). He is one of the highly cited authors in computer science and software engineering worldwide (h-index=158, g-index=334, 130,200+ citations). Microsoft Academic Search Index ranked Dr. Buyya as #1 author in the world (2005-2016) for both field rating and citations evaluations in the area of Distributed and Parallel Computing. A Scientometric Analysis of Cloud Computing Literature by German scientists ranked Dr. Buyya as the World's Top-Cited (#1) Author and the World's Most-Productive (#1) Author in Cloud Computing. Dr. Buyya is recognized as a Web of Science Highly Cited Researcher by Thomson Reuters, a Fellow of IEEE, Scopus Researcher of the Year 2017 with Excellence in Innovative Research Award by Elsevier, a Fellow of Academia Europea, Lifetime Achiever and Superstar of Australia Research (2021) by The Australian Research Review, and Cloud Architect of the Year 2022 by Oracle for his outstanding contributions to Cloud computing.",
        image: "images/committee/buyya.jpg",
    },

    41: {
        name:" Prof. Ashish Sharma",
        info: " Results-driven, Business Strategist & Information Science Specialist with 19 + years of diverse experience in Industrialization-of-Analytics and building Intelligent-Platforms built for scalability & high transaction volume with focus on business insights, advance analytics, customer adaptation and Infrastructure capacity management across multiple domains using Cloud, BIG Data, Data Science, Text Mining, Machine Learning, AI and Security systems. Led incubator and R&D lab that resulted in successful companies and multiple profitable product lines using ML, NLP, and AI-Powered Consumer insights that supported projects in anti-terrorism, life sciences, bio-metric and sensor data. Unified cloud, BIG data, analytics & reporting environment for accelerating data to insights journey. Seasoned entrepreneur with extensive experience leading globally distributed, cross‐functional teams while maintaining a strong culture of innovation. Adept at enabling operational efficiencies and business transformation driven by people, process, data and technology.",
        image: "images/committee/ashish.jpg",
    },
    42: {
        name: "Prof. Dr. Aard J. Groen ",
        info: "Research, teaching and support of development of new innovative business in existing and new firms in international and /or in technological context. Technology based entrepreneurship, technology management, and innovation management: entrepreneurship, corporate entrepreneurship, innovation, technology, network theory and social system theory, quantitative and qualitative methods and techniques of social science. CEO Venturelab International Holding BV: consultancy of support and development of entrepreneurship in startups, universities and existing companies. Distinghuised professor entrepreneurship Thapar University, Patiala, India .advisory board of Anymal bv, Advisory board Ivy-medical BV, former Member expert committee SNN ,interim-chair foundation Kansrijk Eigen Baas,member of subsidy advice committee Regio Groningen-Assen",
        image:"images/committee/groen.jpg",
    },
    43: {
        name: "Prof. Syafrizal",
        info: "My research for PhD includes the field of Management, Strategy, Business Process Reengineering, Innovation and technology transfer. It attract my attention to view those field from research policy. Qualitative methods (phenomenography, discourse analysis) was introduced while I study technology & innovation management in the University of Queensland Australia. While other systemic and empirical methodologies, I used for my PhD project.",
        image: "images/committee/prof-syafrizal.jpg",
    },

    44: {
        name: "Dr. Deden Kurniawan",
        info: "Dr. Deden Kurniawan, SH, MH, ME, is a distinguished academic affiliated with Universitas Budi Luhur. He holds multiple degrees in law (SH), humanities (MH), and economics (ME), reflecting a diverse academic background. His role within the university extends beyond teaching, as he is actively involved in various academic and institutional activities. Universitas Budi Luhur is well-known for offering a wide range of academic programs, and Dr. Deden's expertise contributes to its strong focus on law and business studies. For more specific information on his contributions and role at Universitas Budi Luhur, you can refer to the official university website​(Budi Luhur University)​(Universitas Budi Luhur). ",
        image: "images/committee/Deden-Kurniawan-2-transformed.jpeg",
    },
    45: {
        name: "Dr. Harvinder Singh",
        info: " Harvinder Singh is currently an Adjunct Associate Professor with Torrens University Australia and a Professor and the Program Director of the Leaders Institute, Brisbane, QLD, Australia. He has been an academic for nearly two decades with strong teaching and research expertise in informatics, traditional and molecular plant breeding approaches for the improvement and management of cereal crops, and medicinal plants. Additionally, in his current role as the program director, he has demonstrated strong academic management and higher education compliance knowledge and capability. He also has a strong research and higher degree supervision experience. He has published over 60 research articles in peer reviewed journals, books, and conference proceedings. He also presented his research at national and international conferences. He has successfully secured and completed many research grants.",
        image: "images/committee/harvinder.jpg",
    },

    46: {
        name: "Dr. Theyazn H.H Aldhyani ",
        info: "Dr. Theyazn H.H Aldhyani. In 2017, he was awarded the Ph.D. degree in Computer Science and Information Technology from NMU University. His areas of research are artificial intelligence machine learning, soft computing, Big Data, healthcare information, deep learning, cybersecurity, and IoT. Currently, he is an assistant professor at the Faculty of Computer Science and Information Technology King Faisal University. He has published over 35 research papers in highly reputed journals of publishers MDPI, Springer, and IEEE Hindwai. He is a Reviewer in MDPI, Springer, IEEE Hindwai, and Elsevier.",
        image: "images/committee/theyazn.jpg",
    
    },
    47: {
        name: "Rumi Iqbal Doewes",
        info: "Rumi Iqbal Doewes is a faculty member at Universitas Sebelas Maret (UNS), specifically in the S-1 Pendidikan Kepelatihan dan Olahraga program at the Faculty of Sports (Fakultas Keolahragaan). His academic work is notable for research in biomechanics, with a particular focus on sports performance and athletic training His contributions include research on biomechanics in sports such as futsal, goalkeeping, and field player performance, as well as studies related to the effects of nutrition and supplements on physical performance. One of his research highlights involves developing a mathematical model for soccer techniques like free kicks and penalties. Furthermore, he has been involved in creating resources for preventing doping in sports (​SINTA)​(UNS.AC.ID).Rumi Iqbal Doewes is recognized for his extensive contributions to sports science, both in terms of research and application within Indonesia’s athletic training community. You can explore more about his works through platforms like SINTA.",
        image: "images/committee/rumi.jpg",
    },
    48: {
        name: "Prof. Dr. Vijayakumar Varadarajan",
        info: "Prof. Dr. Vijayakumar Varadarajan is currently an Adjunct Professor in School of Computer Science and Engineering, University of New South Wales, Sydney, Australia. He is also a Data Science Advisor for Brite Yellow Pvt Ltd United Kingdom, He is also a President and Founder of Global Students Nest, . He was a Professor and Associate Dean for School of Computing Science and Engineering at VIT University, Chennai, India. He has more than 18 years of experience including industrial and institutional. He also served as a Team Lead in industries like Satyam, Mahindra Satyam and Tech Mahindra for several years. He has completed Diploma with First Class Honors. He has completed BE CSE and MBA HRD with First Class. He has also completed ME CSE with First Rank Award. He has completed his PhD from Anna University in 2012. He has published many articles in national and international level journals/conferences/books. He is a reviewer in IEEE Transactions, Inderscience and Springer Journals. He has initiated a number of international research collaborations with universities in Europe, Australia, Africa, Malaysia, Singapore and North & South America. He had also initiated joint research collaboration between VIT University and various industries. He is also the Lead Guest Editor for few journals in Inderscience, Springer, Elsevier, IOS, UM and IGI Global. He also organized several international conferences and special sessions in USA, Vietnam, Africa, Malaysia and India including ARCI, IEEE, ACSAT, ISRC, ISBCC, ICBCC etc. His research interests include computational areas covering grid computing, cloud computing, computer networks, cyber security and big data. He received his university-level Best Faculty Award for 2015–2016. He is also a member of several national and international professional bodies including IFSA, EAI, BIS, ISTE, IAENG, CSTA, IEA etc.",
        image: "images/committee/vijayakumar.jpg",
    },
    49: {
        name : "Jeshwanth Challagundla",
        info: "Jeshwanth Challagundla is a skilled Machine Learning Software Engineer currently working at Google, with a passion for applied Machine Learning and Deep Learning. With 5.78 years of relevant experience, he has worked for leading companies such as General Motors and Magna International in the past. As an Autonomous Driving Software Engineer at General Motors, Jeshwanth was responsible for developing and testing advanced driver assistance features such as lane keep assist and collision mitigation braking. At Magna International, he benchmarked in-house computer vision chips against Mobileye EyeQ3 and developed a closed-loop test system for front camera modules. Jeshwanth holds a Master of Science (M.S.) degree in Electrical Engineering from the University of Texas at Arlington and a Bachelor of Technology - BTech degree in Electrical and Electronics Engineering from Pondicherry University. He also completed the Self-Driving Car Engineer Nanodegree program from Udacity. Jeshwanth's technical expertise includes Software Engineering, Machine Learning, Deep Learning, Computer Vision, and test development. With his strong problem-solving skills and attention to detail, he is adept at developing innovative solutions to complex challenges. Jeshwanth is committed to continuous learning and enjoys staying up-to-date with the latest trends and technologies in the field. He is a valuable asset to any team and is always willing to share his knowledge and expertise to help others grow and succeed.",
        image: "images/committee/jeswanth.jpg",
    },
    50: {
        name: "Richard Socher",
        info: "Richard previously served as the Chief Scientist and EVP at Salesforce, where he lead teams working on fundamental research,  applied research, product incubation, search, customer service automation and a cross-product AI platform for unstructured and structured data. Before that, Richard was the CEO/CTO of AI startup MetaMind, acquired by Salesforce in 2016. Richard received his Ph.D. in computer science at Stanford University in 2014 and later served as an adjunct professor in the CS department at Stanford. He is widely recognized as having brought neural networks into the field of natural language processing, inventing the most widely used word vectors, contextual vectors and prompt engineering. He has over 180,000 citations and won awards such as the best computer science PhD thesis awards at Stanford in 2014, honorary doctorate (Dr.-Ing. h. c.) from the TU Dresden, the ICML 2011 best paper award, 2016 Young Global Leader at WEF, the Microsoft PhD Fellowship, the test of time award at ACL 2023 for a paper from 2013, the PAMI Longuet-Higgins Prize for ImageNet, 2024 WEF Technology pioneers with you.com, the 2023 Time Magazine’s Time100 AI, first place at the local LaserTag one random Friday evening and more. ",
        image: "images/committee/richard.jpeg",
    },

    51:{
        name:"Dr. Durga Prasad Mohapatra",
        
        info:"Durga Prasad Mohapatra received his Ph. D. from Indian Institute of Technology Kharagpur and M. E. from Regional Engineering College (now NIT), Rourkela, in Computer Science and Engineering. He joined the faculty of the Department of Computer Science and Engineering at the National Institute of Technology, Rourkela in 1996, where he is now a full Professor. His research interests include software engineering, real-time systems, discrete mathematics and distributed systems. He has published more than hundred research papers in these fields in various international Journals and Conferences. He has guided more than 20 Ph. D. Theses in these areas. He had successfully completed 3 research projects sponsored by DST and UGC. He has received Young Scientist Award for the year 2006 by Orissa Bigyan Academy. He has received Prof. K. Arumugam National Award and Maharashtra State National Award for outstanding research work in Software Engineering for the years 2009 and 2010 respectively by Indian Society for Technical Education (ISTE), NewDelhi. He has also received NITRAA Research Excellence award by NIT Rourkela Alumni Association for the year 2019. Dr. Mohapatra has co-authored the book Elements of Discrete Mathematics: A computer Oriented Approach published by Mc-Graw Hill.",
        image:"images/committee/durga-prasad.jpg",
    },
    52:{
        name:"Dr. Abhishek Gupta",
       
        info:"Experienced Scientist and Professor with a demonstrated history of working in the higher education and research industry. Skilled in Image Processing, Medical Imaging, and Algorithm development and Optimization. Strong education professional with B.E., M.E., and Doctor of Philosophy (Ph.D.) focused in Medical Image Processing and Computer Vision and working with Ministry of Science and Technology at CSIR-Central Scientific Instruments Organisation, Chandigarh Campus. Working in the area of computational dentistry. Filed 8 patents in India and US, and 2 US patents and 2 Indian patents have been granted in his credit. Authored 30 articles in SCI journals, and authored several other articles in conferences and other journals with reputed indexing.Served as a Lead Guest Editor of many reputed SCI journals published by Springer and Wiley. Served as a reviewer of several SCI and SCOPUS-indexed journals. Serving as Associate Editor for the Journal of Multimedia Tools and Applications. Working on several sponsored projects from government funding agencies. Guided many doctoral students, MTech students, and B. Tech projects in the area of Image processing and Computer Vision.",
        image:"images/committee/abhishek.jpg",
    },
    53:{
        name:"Dr. B. Surendiran",
        
        info:"Dr.B.Surendiran currently working as associate professor in the department of CSE at NIT Puducherry, Karaikal. He had completed his Ph.D from NIT Tiruchirapalli, India. His area of interest are machine learning, medical imaging, dimensionality reduction. He has 85+ publications to his credit. He is active reviewer for various SCI/Scopus Journals and completed 1000+ reviews as of May 2024. He had received top reviewer award from publons.com in the year 2019. Received Top Downloaded Author Award from Wiley, Expert System Journal in the year Apr 2024. Awarded Senior member for Top 1% profiles out of all EAI Members in the year 2022.",
        image:"images/committee/surendiran.jpg",
    },
    54:{
        name:"Dr. Rahul Hiremath",
        
        info:"Dr Rahul B. Hiremath holds a Master's degree from BITS Pilani and a PhD from the Indian Institute of Science, Bangalore, followed by a post-doctoral research fellowship at the London School of Economics and Political Science (LSE). He has actively collaborated with several renowned international organisations, including DFID UK, SDC, Global Environmental Fund (GEF), and World Bank, on numerous research projects. He has several publications in peer-reviewed journals.",
        image:"images/committee/rahul.jpg",
    },
    55:{
        name:"Dr. Chandra Prakash",
       
        info:"Dr. Chandra Prakash is currently working as Assistant Professor in Department of Computer Engineering, SVNIT, Surat Gujarat, India. Dr. Prakash has two patents and authored more than 51 publications in refereed journals, book chapters, and conferences. Currently he is the principal investigator (PI) of a SERB sponsored project. He is a recipient of six Best Paper at different international conferences.  He is a recipient of the scholarship as Junior Research Fellow (JRF) in DST Funded Project, the Lord of the Code Scholarship from RedHat and the IIT Bombay. His areas of interest are Artificial Intelligence, Machine Learning, Motion Analysis, Reinforcement Learning, Computational Neuroscience, Gait Analysis in healthcare, Biometrics (Gait & Face Recognition) and Natural Language Processing. Dr. Prakash has teaching and research experience of over 12 years. He is the founder of the Computational Intelligence and Smart Motion Robotics (CISMR) research group. Dr. Chandra Prakash is 2010 alumni of Indian Institute of Information Technology and Management (IIITM), Gwalior, India, from there he pursued B.Tech. and M.Tech. in Information Technology (IT). Dr. Prakash received the Ph.D. degrees in Machine Learning from Malaviya National Institute of Technology (MNIT) Jaipur, India, in 2018.",
        image:"images/committee/chandra.jpg",
    },
    56:{
        name:"Dr. Sajal Saha",
        
        info:"Dr. Sajal Saha is an esteemed academic professional with over 20 years of experience spanning across the affiliated college and university system. Currently, he holds the positions of Professor and Head of the Department of Computer Science and Engineering, as well as Director of Product & Innovation at Adamas University. Prior to this, Dr. Saha served as the Principal of Meghnad Saha Institute of Technology under Techno India Group, affiliated with Maulana Abul Kalam Azad University of Technology, West Bengal. Dr. Saha began his career as a Project Trainee in the field of GIS and Remote Sensing at the Indian Space Research Organization (ISRO) in 2004. He later joined Narula Institute of Technology, Kolkata, India, where he served in various capacities such as Lecturer, Senior Lecturer, and Assistant Professor for 12 years. As a member of IEEE Communication Society, IEEE Computer Society, ACM, and the global member of ISoC-Internet Society, Dr. Saha actively participates in these professional organizations, seeking to expand his network and collaborate with fellow academics and professionals.",
        image:"images/committee/sajal.jpg",
    },
    57:{
        name:"Prof. Mahesh Chandra Govil",
      
        info:"M. C. Govil was a Full Professor with the Department of Computer Science and Engineering, Malaviya National Institute of Technology Jaipur, India. He is currently the Director with NIT Sikkim. His areas of interest include real time systems, parallel and distributed systems, fault tolerant systems, object detection, and cloud computing.",
        image:"images/committee/mahesh.jpg",
    },
    58:{
        name:"Prof. Rakesh Jha",
       
        info:"Prof. Rakesh K. Jha is Professor in the Department of Electronics and Communication Engineering, Central University Jammu. He has served as an Associate professor at Indian Institute of Information Technology, Design and Manufacturing, Jabalpur (IIITDM Jabalpur) and SMVDU Katra. He is among the top 2% researchers of the world in engineering field. He is carrying out his research in wireless communication, power optimizations, wireless security issues, and optical Fiber communication. He has done B. Tech (Hon's) in Electronics and Communication Engineering and M. Tech from NIT Jalandhar (Hon's), India in 2008. Received his Ph.D. degree from NIT Surat, India in 2013. He has completed his 10th exam from govt. High school and Class 12th from Science College. He has published more than 71 SCI Journal papers including IEEE Transactions, IEEE Journal, Elsevier, Springer, Taylor & Francis, Hindawi, etc. He has published more than 31 Interference including ITU-T, IEEE ANTS, INDICON, IEEE ANTS, and APAN. Dr. Jha’s one concept related to the router of Wireless Communication has been accepted by ITU (International Telecommunication Union) in 2010. He has received the young scientist author award by ITU in Dec 2010.",
        image:"images/committee/rakesh-jha.jpg",
    },
    59:{
        name:"Dr. Uday Pratap Singh",
       
        info:"Dr. Uday Pratap Singh, graduated in Mathematics from Dr. Ram Manohar Lohiya (Awadh) University, Ayodhya (U.P.) in 1998. He obtained his first M.Sc. degree in Mathematics & Statistics (Gold Medalist) in 2000, from Dr. Ram Manohar Lohiya (Awadh) University, Ayodhya, U.P. and Second M.Sc. degree in Mathematics & Computing from Indian Institute of Technology, Guwahati. He also qualified CSIR (NET) in 2007 and later he received his Ph.D. Degree in Computer Science from Barkatullah University, Bhopal, in 2013. He is currently working as Associate Professor in the Department of Mathematics, Central University of Jammu, Samba, (India) from July 2023. He published/presented around 160 research papers in reputed International/National Journals and Conferences, 03 Books and 20 Book Chapters in the area of Nonlinear Systems, Soft Computing and Image Processing etc. Also, he organized Faculty Development Programs (FDP), International /National Conferences and Workshops. His area of research includes Non-linear Systems, Image Processing, Soft Computing and Intelligent Control Systems, etc. He is managing editor, associate editor and reviewer in various reputed journals and conferences. ",
        image:"images/committee/uday.jpg",
    },
    60:{
        name:"Prof. Akash Saxena",
      
        info:"Dr. Akash  received the Bachelor of Technology in Engineering with honors in Electrical Engineering from the Department of Electrical Engineering, Engineering College Kota, Kota Rajasthan, India in 2001,Master of Technology with honors in Power System Engineering from the Department of Electrical Engineering, Malaviya National Institute of Technology, Jaipur, India in 2008 and Ph.D. degree in Power System Dynamics from the Malaviya National Institute of Technology, India in 2015. Dr. Akash has presented research work at national/international conferences in India and abroad. His work has been published in leading journals in the form of short communication/letters /articles/research papers. He is associated with many professional organizations as an editor, reviewer and adviser. His research interests are the Computational Intelligence, Application of Artificial Intelligence in the power system, Control theory, smart grid, signal processing and Metaheuristics.",
        image:"images/committee/akash.jpg",
    },
    61:{
        name:"Dr. Sanjay Panda",
        
        info:"Dr. Sanjaya Kumar Panda is working as an Assistant Professor in the Department of CSE at NIT Warangal, Telangana, India. He worked as an Assistant Professor and Head of the Department, CSE at IIITDM Kurnool, Andhra Pradesh, India and also worked as an Assistant Professor in the Department of IT at VSSUT, Burla, Odisha, India. He received Ph. D. degree from IIT (ISM) Dhanbad, Jharkhand, India, M. Tech. degree from NIT, Rourkela, Odisha, India and B. Tech. degree from VSSUT, Burla, Odisha, India in CSE. He has 10 years of teaching and research experience. He received 23 awards from IEEE, IE (I), ISTE, CSI and others, which includes two silver medal awards for the best graduate and best post-graduate in CSE, IEI young engineers award, IEEE senior member and CSI & ACM distinguished speaker. He is listed in the top 2% of world scientists in a single year impact as per the survey conducted by Stanford University, USA and Elsevier, in October 2022 and 2023. He has published 130+ papers in reputed journals and conferences, and edited 4 books. He is a member of IEEE, IE(I), Life member of ISTE and Life member of CSI. His current research interests include cloud and fog computing, artificial intelligence, machine learning and Internet of things. ",
        image:"images/committee/sanjay.jpg",
    },
    62:{
        name:"Dr. Premanand S Chauhan",
       
        info:"Prof. Premanand S Chauhan, an exemplary academician, a visionary administrator with extraordinary leadership attributes has a wide experience of 25 years in academia and industry. Experienced with a demonstrated history of working in the higher education industry. Skilled in Machining, Process Design, Cost Evaluation, and Quality Tools. Strong education professional with a Doctor of Philosophy (Ph.D.) in Mechanical Engineering from Maulana Azad National Institute of Technology.",
        image:"images/committee/premanand.jpg",
    },
    63:{
        name:"Dr. Jolly Masih",
        
        info:"Dr. Jolly Masih is working on Epidemological research in health care and lifestyles including consumer behaviour studies at Erasmus School of Economics in collaboration with Erasmus Medical College, Rotterdam, the Netherlands. She has acute inclination in mood disorders and depression studies caused due to changes in lifestyle example food habits, change in job, shifting to a new place or any noticeable change in normal routine. She completed her PhD from Drexel University, USA in collaboration with Institution of Agribusiness Management, Bikaner, India. She has written over 35 research papers and is author of book titled “Marketing strategies and distribution mix for gluten-free foods”. She also has contributed in field of big data analytics, agribusiness management and auto immune disorders like celiac disease and gluten sensitivity. She is two times winner of RULA Best Scientist International award. She was awarded Best Emerging Young Researcher at Institution of Agribusiness Management, Bikaner. She is Editor of Journal of Depression and Anxiety and has handled special issue titled “Lifestyle changes and depression”. Her research goal and to link epidemiological studies to life sciences for betterment of humanity.",
        image:"images/committee/jolly.jpg",
    },
    64:{
        name:"Dr. Lalit Kumar Singh",
        
        info:"Dr. Lalit Kumar Singh received his Ph.D. degree from Indian Institute of Technology (Banaras Hindu University). He is currently a Scientist in NPCIL-BARC, Department of Atomic Energy, Government of India, and has distinction of working on Pressurized Heavy Water Reactors (PHWR) and Light Water Reactors (LWR). He has an illustrious career and succeeded in several critical jobs assigned to him in his illustrious career, though, each of them was challenging. His assignments over the years range from design, development, testing, IV&V, related research and site validation of the safety critical computer based systems of Indian Nuclear Power Plants. He has published several research papers in journals of high impact factor like IEEE Transactions, IEEE Computer, ACM, etc. He has been invited for chief guest, keynote speeches, session chair and talks in many international conferences, short term courses, workshops & faculty development programs from many IITs, IIMs, NITs & other institutes of national importance. So far, he has delivered more than 250 talks. He is recipient of many awards like prestigious IEEE K Shankar award, publication award, group achievement award, etc. He is a reviewer of several SCI indexed journals of high impact factor.",
        image:"images/committee/lalit.jpg",
    },
    65:{
        name:"Prof. S. Vijayakumar Bharathi",
        
        info:"With a rich background in SAP technologies and curriculum development, S. Vijayakumar Bharathi has been instrumental in designing and executing SAP-based programs, including SAP Analytics Cloud (SAC) and SAP Integrated Business Planning (IBP), across multiple countries such as India, Singapore, Malaysia, Hong Kong, Mongolia, Vietnam, Australia, and Myanmar. As a global pilot member for SAC, PA, and IBP, [Name] is an SAP-certified faculty trainer with a strong focus on immersive technologies and process mining. Their research interests include design thinking, technology adoption models, blockchain applications, and process mining. S. Vijayakumar Bharathi has visited SAP Germany twice to contribute to curriculum development and demonstration. Furthermore, they worked on a four-year European Commission-funded project, Enhancing Quality Assurance Management and Benchmarking in Indian Universities (EQUAM-BI), and presented its milestones at prestigious institutions like IIT Madras, KTH Stockholm, the University of Valencia, and the University of Barcelona. As the Founding President of the SAP UA Academic Board for Asia Pacific Japan and China, S. Vijayakumar Bharathi has been a driving force in advancing SAP education standards across the region.",
        image:"images/committee/vijayakumar-bharti.jpg",
    },
    66:{
        name:"Dr. Anupama Agarwal",
        info:"An accomplished Associate Professor with a proven track record in the higher education sector. Skilled in Engineering Physics, Physics, Materials, Product Development, Planning, Teaching, and potentially involved in organizing various events like conferences, FDPs, webinars, seminars, and workshops.  A Strong education professional with a Doctor of Philosophy - PhD focused in Physics.",
        image:"images/committee/anupama.jpg",
    },

    67:{
        name:"Prakash Motwani",
        info: "Prakash Motwani serves as the Executive Vice President at Netlink, a global IT service provider known for its expertise in digital transformation, IT consulting, and business process outsourcing. With over 20 years of experience in the technology industry, he has been instrumental in driving the growth and success of the company. His role encompasses leadership in strategic planning, customer engagement, and service delivery excellence. Motwani’s career is built on a foundation of strong technical acumen and business insights, which allow him to align IT solutions with client needs effectively. He likely oversees key accounts, partnerships, and operational strategies that help Netlink deliver innovative and scalable solutions. As a leader, he emphasizes the importance of customer-centric approaches and leveraging cutting-edge technology to enhance business processes. His efforts have contributed to Netlink’s reputation for delivering high-quality services across industries.",
        image:"images/keynote/motwani.jpeg",
    },
    68:{
        name:"Dr. Deepika Koundal",
        info: "Dr. Deepika Koundal is a Senior Researcher at the University of Eastern Finland, known for her expertise in machine learning, artificial intelligence (AI), and medical image processing. With a strong academic background, she has contributed significantly to research in areas like healthcare technology, bioinformatics, and pattern recognition. Her work often involves developing AI and machine learning algorithms to improve diagnostic accuracy in medical imaging, helping detect and analyze diseases more efficiently. She has published extensively in peer-reviewed journals, addressing cutting-edge topics such as deep learning applications in healthcare, biomedical signal processing, and computational models for disease detection. Dr. Koundal's research is recognized internationally, and she is likely involved in various collaborations with academic and industry partners to advance AI-driven solutions for global healthcare challenges. Her role as a senior researcher also involves mentoring students, leading projects, and securing research funding to further her studies in the field of health technology and AI.",
        image:"images/keynote/deepika-koundal.jpg",
    },
    69:{
        name:"Dr. Shiv Kumar Agrawal",
        info: "Dr. Shiv Kumar Agrawal is a prominent scientist at ICARDA (International Center for Agricultural Research in the Dry Areas), focusing on agricultural research to improve food security and sustainable farming practices, particularly in dryland regions. He is based in India and is widely recognized for his expertise in plant breeding, genetics, and crop improvement. Dr. Agrawal's work primarily involves developing improved varieties of crops like lentils, chickpeas, and other legumes, which are crucial for nutrition and food systems in dry areas. His research focuses on enhancing the yield, drought resistance, and disease tolerance of these crops to help farmers in arid and semi-arid regions adapt to challenging climatic conditions. A key part of his work at ICARDA includes collaborating with international agricultural scientists, working on projects aimed at improving crop productivity and ensuring food security in developing nations. Dr. Agrawal has also published numerous research papers and contributed to the scientific community's understanding of sustainable agriculture and genetic resource conservation. His contributions have had a significant impact on global efforts to combat hunger and promote agricultural resilience in dryland environments.",
        image:"images/keynote/SK.Agrawal_cgiar.org-transformed.jpeg",
    },
    70:{
        name:"Dr. Lalit Singh",
        info: "Dr. Lalit Singh is a Senior Scientist at NPCIL (Nuclear Power Corporation of India Limited) and BARC (Bhabha Atomic Research Centre), two of India's most prestigious organizations involved in nuclear research and energy development. His expertise likely spans nuclear science, reactor technology, radiation safety, and the development of advanced nuclear technologies for power generation. At NPCIL, Dr. Singh is involved in the design, development, and safe operation of nuclear power plants, contributing to India’s energy security by helping harness nuclear energy for civilian use. NPCIL is responsible for the construction and operation of nuclear reactors, and as a senior scientist, Dr. Singh would play a critical role in ensuring that these reactors operate efficiently and within strict safety guidelines. At BARC, which focuses on nuclear research and development, Dr. Singh would be engaged in cutting-edge research related to atomic energy, radiation technologies, and potentially contributing to advancements in nuclear medicine, radiation applications, and materials science. His work would have a direct impact on India’s technological capabilities in the nuclear sector, from energy production to medical and industrial applications. Given his senior role, Dr. Singh is likely involved in mentoring young scientists, contributing to policy-making discussions, and possibly engaging in collaborations with both national and international organizations on nuclear research and safety protocols. His contributions help ensure that India continues to develop safe and sustainable nuclear energy",
        image:"images/keynote/lsingh-3270314-small-0000.jpg",
    },
    71:{
        name:"Dr. Dharma Raj",
        info: "Dr. Dharma Raj is a scientist affiliated with the National Institute for Research in Environmental Health (NIREH), which is part of the Indian Council of Medical Research (ICMR) in Bhopal. NIREH was established to address environmental health concerns, particularly those related to the long-term effects of the Bhopal Gas Tragedy, one of the worst industrial disasters in history. Dr. Dharma Raj's work at NIREH focuses on environmental health, toxicology, and public health research, especially in relation to the aftermath of the Bhopal disaster. His role likely involves investigating the impact of environmental pollutants, studying chronic health conditions prevalent among survivors, and developing strategies for mitigating health risks associated with environmental contamination. He may also be involved in epidemiological studies and community health programs aimed at addressing the long-term health needs of populations affected by industrial and environmental hazards. His research could extend to studying the interaction between environmental toxins and human health, providing insights into how to better protect populations from similar risks in the future. As part of ICMR, Dr. Dharma Raj's contributions are likely critical to shaping health policies and creating awareness about environmental health challenges, not just in Bhopal but across India. His work helps in understanding the complex interplay between environmental factors and human health, contributing to public health initiatives and policy development aimed at preventing and managing the health impacts of environmental disasters.",
        image:"images/keynote/Picture6.jpg",
    },
    72:{
        name:"Dr. Ram Bilas Pachouri",
        info: "Dr. Ram Bilas Pachouri is a professor and researcher at IIT Indore (Indian Institute of Technology Indore), specializing in areas such as signal processing, biomedical engineering, and machine learning. His work primarily focuses on the application of advanced computational techniques in healthcare, particularly in biomedical signal analysis and brain-computer interfacing. At IIT Indore, Dr. Pachouri's research may include developing algorithms for analyzing complex biomedical signals like EEG (electroencephalogram) and ECG (electrocardiogram), which are used for diagnosing neurological and cardiovascular disorders. His expertise in signal processing allows him to extract meaningful information from these signals, improving diagnostic accuracy and advancing technologies in non-invasive medical diagnostics. Dr. Pachouri also likely collaborates on interdisciplinary projects that combine machine learning and artificial intelligence with biomedical applications. This could involve designing systems for real-time health monitoring, enhancing medical imaging techniques, or developing models for predictive healthcare. In addition to his research, Dr. Pachouri is likely involved in teaching and mentoring students, supervising Ph.D. candidates, and publishing extensively in reputed scientific journals. His work bridges the gap between engineering and medicine, contributing to innovations in health technology that can improve patient care and healthcare outcomes.",
        image:"images/keynote/Picture5.jpg",
    },
    
    73:{
        name:"Tanmay Basu",
        info: "Tanmay Basu is associated with the Indian Institute of Science Education and Research (IISER) Bhopal, where he is likely involved in research and teaching in the fields of biology, chemistry, or interdisciplinary sciences. IISER Bhopal is known for its focus on research-driven education, promoting a deep understanding of scientific principles and practices among its students. Basu’s research interests may encompass various areas, potentially including biochemistry, molecular biology, biotechnology, or environmental science. He could be involved in studying biological systems, conducting experiments to understand molecular mechanisms, or exploring new techniques and technologies to advance scientific knowledge. In addition to his research activities, Basu may also engage in mentoring students, guiding them through their academic and research pursuits, and contributing to the academic community through publications in scientific journals and presentations at conferences. His work at IISER Bhopal helps foster a culture of scientific inquiry and innovation, contributing to advancements in various scientific disciplines. For more specific information about his research focus and contributions, checking IISER Bhopal’s official website or recent publications would provide the most accurate insights.",
        image:"images/keynote/Picture2.jpg",
    },
    74:{
        name:"Prof. Sujit PB",
        info: "Prof. Sujit P. B. is a faculty member at the Indian Institute of Science Education and Research (IISER) Bhopal, specializing in theoretical and computational chemistry. His research interests encompass quantum chemistry, where he explores the electronic structure of molecules and chemical reactions, as well as molecular modeling, which involves using simulations to understand complex chemical systems. Additionally, he investigates the properties of materials at the molecular level to develop new materials with specific functionalities. At IISER Bhopal, Prof. Sujit plays a crucial role in guiding students in their academic pursuits, mentoring Ph.D. candidates, and supervising undergraduate research projects. His contributions to the academic community include publishing research papers in peer-reviewed journals and presenting at conferences, all while fostering a research-driven educational environment that promotes scientific inquiry and advancements in chemistry and related interdisciplinary fields. For specific details on his research projects and publications, visiting IISER Bhopal's official website or his academic profile would provide more insights.",
        image:"images/keynote/sujit.jpg",
    },
    75:{
        name:"Dr. Lalit Yagnik",
        info: "With 25 years of experience as a business technology consultant and trusted advisor, I have worked across diverse regions including Australia/NZ, Singapore/ASEAN, India, USA, and the Middle East, serving both global enterprises and startups. My career spans roles at IBM, mid-sized companies, and startups, including founding IBM's software innovation centers in India and Singapore, and leading key technology initiatives as part of IBM’s global leadership. I also served as Managing Director for the Asia Pacific region at a Microsoft global technology partner for cloud engineering. Currently, I am the Chief Digital Officer for a global digital transformation company, while mentoring a venture fund and startups, one of which has achieved unicorn status. My expertise lies in guiding product ideation, strategy, market rollouts, and partnerships, with a focus on scaling Indian businesses globally through innovative tech solutions.",
        image:"images/keynote/lalit\ yagnik.jpg",
    },
  };
  
  // Function to open the popup
  function openPopup(id) {
    const popup = document.querySelector('#popup');
    const nameElement = document.querySelector('#popup-name');
    const infoElement = document.querySelector('#popup-info');
    const imageElement = document.querySelector('#popup-image');
  
    // Get the data for the clicked team member
    const data = teamData[id];
  
    // Populate the popup with the member's info
    nameElement.textContent = data.name;
    infoElement.textContent = data.info;
    imageElement.src = data.image;
  
    // First, show the popup with display: flex
    popup.style.display = 'flex';
  
    // Then, after a small delay, add the 'show' class to trigger the opacity and transform transition
    setTimeout(() => {
      popup.classList.add('show');
    }, 10); // Small delay to allow display: flex to take effect
  }
  
  // Function to close the popup
  function closePopup() {
    const popup = document.getElementById('popup');
    
    // Remove the 'show' class first to trigger the fade-out effect
    popup.classList.remove('show');
  
    // Wait for the transition to finish before fully hiding the popup
    setTimeout(() => {
      popup.style.display = 'none';
    }, 300); // This should match the CSS transition duration (0.3s)
  }
  
  // Event listeners
  document.querySelectorAll('.name').forEach((nameElement) => {
    nameElement.addEventListener('click', function () {
      const id = this.getAttribute('data-id');
      openPopup(id);
    });
  });
  
  // Close popup when clicking outside
  document.getElementById('popup').addEventListener('click', function (e) {
    if (e.target === this) {
      closePopup();
    }
  });
  
  // Optional: Close button (if you add one inside the popup)
  document.querySelector('.popup-close').addEventListener('click', closePopup);
  
  

