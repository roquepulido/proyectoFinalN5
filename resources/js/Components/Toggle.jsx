import { useState } from "react";

export default function Toggle({ name, ...props }) {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="relative flex flex-col items-star">
            <div className="flex">
                <span className="mr-2 font-medium text-sm text-gray-700">
                    Aplicante
                </span>
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        {...props}
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                        name="aplicante"
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    ></div>
                    <span className="ml-2 font-medium text-sm text-gray-700">
                        {name}
                    </span>
                </label>
            </div>
        </div>
    );
}
