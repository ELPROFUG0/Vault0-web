"use client"

export function CloudBackground() {
  return (
    <div className="cloud-background">
      {/* Soft cloud blobs */}
      <div className="cloud-blob blob-1"></div>
      <div className="cloud-blob blob-2"></div>
      <div className="cloud-blob blob-3"></div>
      <div className="cloud-blob blob-4"></div>
      <div className="cloud-blob blob-5"></div>

      <style jsx>{`
        .cloud-background {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
          background: linear-gradient(180deg,
            rgb(100, 165, 220) 0%,
            rgb(150, 195, 235) 30%,
            rgb(200, 225, 245) 60%,
            rgb(255, 255, 255) 100%
          );
        }

        .cloud-blob {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          filter: blur(80px);
          opacity: 0.8;
        }

        .blob-1 {
          width: 600px;
          height: 300px;
          top: 5%;
          left: 10%;
          animation: float1 25s ease-in-out infinite;
        }

        .blob-2 {
          width: 500px;
          height: 250px;
          top: 15%;
          right: 5%;
          animation: float2 30s ease-in-out infinite;
        }

        .blob-3 {
          width: 700px;
          height: 350px;
          top: 35%;
          left: 30%;
          animation: float3 35s ease-in-out infinite;
        }

        .blob-4 {
          width: 400px;
          height: 200px;
          top: 55%;
          left: 5%;
          animation: float4 28s ease-in-out infinite;
        }

        .blob-5 {
          width: 550px;
          height: 280px;
          top: 60%;
          right: 15%;
          animation: float5 32s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, 20px) scale(1.05);
          }
          50% {
            transform: translate(-20px, 40px) scale(0.95);
          }
          75% {
            transform: translate(40px, -10px) scale(1.02);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-40px, 30px) scale(0.98);
          }
          50% {
            transform: translate(20px, -20px) scale(1.05);
          }
          75% {
            transform: translate(-30px, -40px) scale(1);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -30px) scale(1.03);
          }
          66% {
            transform: translate(-40px, 20px) scale(0.97);
          }
        }

        @keyframes float4 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(60px, 30px) scale(1.08);
          }
        }

        @keyframes float5 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-50px, -20px) scale(1.02);
          }
          50% {
            transform: translate(30px, 40px) scale(0.96);
          }
          75% {
            transform: translate(20px, -30px) scale(1.04);
          }
        }
      `}</style>
    </div>
  )
}
