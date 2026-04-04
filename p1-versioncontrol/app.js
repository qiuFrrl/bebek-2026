function renderStaff() {
    const teamGrid = document.getElementById('teamGrid');
    
    if (staff.length === 0) {
        teamGrid.innerHTML = `<p class="col-span-full text-center text-slate-500 italic">Belum ada anggota yang join...</p>`;
        return;
    }

    teamGrid.innerHTML = staff.map((staff) => createStaffCard(staff)).join('');
}

function createStaffCard(staff) {
    const isBPH = staff.role === 'BPH';
    const roleBadge = isBPH 
        ? 'bg-[#facc15] text-[#0f172a]' 
        : 'bg-slate-700 text-slate-300 border border-slate-600';

    const avatarContent = (staff.foto && staff.foto !== "") 
        ? `<img src="${staff.foto}" alt="${staff.name}" class="w-full h-full rounded-full object-cover border-2 border-[#facc15]">`
        : `<span class="text-[#facc15] text-2xl font-black">${getInitials(staff.name)}</span>`;

    return `
        <div class="staff-card bg-[#1e293b] rounded-2xl p-8 border-b-4 border-[#facc15] shadow-xl relative overflow-hidden group">
            <div class="absolute top-0 right-0 w-16 h-16 bg-[#facc15]/5 rounded-bl-full"></div>

            <div class="flex flex-col items-center text-center">
                <div class="w-20 h-20 bg-[#334155] border-2 border-[#facc15] rounded-full flex items-center justify-center mb-4 overflow-hidden">
                    ${avatarContent}
                </div>

                <h3 class="text-xl font-bold text-white mb-1">${staff.name}</h3>
                <span class="text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest ${roleBadge} mb-6">
                    ${staff.role}
                </span>

                <div class="w-full space-y-2 text-sm text-slate-400 mb-8">
                    <p class="flex items-center justify-center gap-2">
                        <span class="text-[#facc15]"></span> ${staff.division}
                    </p>
                    <p class="flex items-center justify-center gap-2">
                        <span class="text-[#facc15]"></span> Batch ${staff.batch}
                    </p>
                </div>

                <a href="https://github.com/${staff.github}" target="_blank" 
                   class="w-full py-3 bg-[#facc15] hover:bg-yellow-500 text-[#0f172a] font-black rounded-xl transition-colors flex items-center justify-center gap-2 uppercase">
                    Github Profile
                </a>
            </div>
        </div>
    `;
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
}

document.addEventListener('DOMContentLoaded', renderStaff);