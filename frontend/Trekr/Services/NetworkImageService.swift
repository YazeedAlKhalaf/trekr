//
//  NetworkImageService.swift
//  NetworkImageService
//
//  Created by Yazeed AlKhalaf on 21/07/2021.
//

import Foundation
import Combine
import SwiftUI


class NetworkImageService: ObservableObject {
    @Published var uiImage: UIImage?
    
    func loadImage(imageUrl: String) {
        guard let url = URL(string: imageUrl) else { return }
        
        URLSession.shared.dataTask(with: url) {data, response, error in
            guard let data = data else { return }
            
            DispatchQueue.main.async {
                self.uiImage = UIImage(data: data)
            }
        }.resume()
    }
}
