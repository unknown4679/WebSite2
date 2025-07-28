import { Rocket, Users, Star } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "John Anderson",
      title: "Chief Executive Officer", 
      experience: "15+ years in AI and enterprise software",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Sarah Chen",
      title: "Chief Technology Officer",
      experience: "12+ years in machine learning and data science",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Michael Rodriguez", 
      title: "Head of Product",
      experience: "10+ years in enterprise software development",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <div className="page-transition">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">About S.P.E.A.R.™</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Leading the future of business intelligence through innovative AI technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At S.P.E.A.R.™, we believe that every business decision should be backed by intelligent data analysis. Our mission is to democratize advanced AI technology, making it accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We're building the future where artificial intelligence seamlessly integrates with human expertise to drive unprecedented business growth and innovation.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Business professionals collaborating with technology"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={`${member.name} headshot`}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.title}</p>
                  <p className="text-sm text-slate-600">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Values Section */}
          <div className="bg-slate-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Innovation</h3>
                <p className="text-slate-600">Pushing the boundaries of what's possible with AI technology</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Collaboration</h3>
                <p className="text-slate-600">Working together to achieve extraordinary results</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Excellence</h3>
                <p className="text-slate-600">Delivering superior quality in everything we do</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
